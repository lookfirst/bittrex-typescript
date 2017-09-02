import * as assert from 'assert';
import * as crypto from 'crypto';
import * as qs from 'query-string';
import * as got from 'got';
import {JsonObject, JsonProperty, JsonConvert} from 'json2typescript';
import {Agent} from 'https';

export declare type ClassType<T> = {
	new (...args: any[]): T;
};

export interface TransportOptions {
	key: string;
	secret: string;
	version?: '1.0' | '1.1';
	agent?: boolean | Agent;
}

@JsonObject
export class BittrexResponse {
	@JsonProperty()
	success: boolean = undefined;
	@JsonProperty()
	message: string = undefined;
	@JsonProperty()
	result: object | object[] | null = undefined;
}

export class Transport {
	private transportOptions: TransportOptions;
	private jsonConvert: JsonConvert = new JsonConvert();

	private get baseUrl() {
		return `https://bittrex.com/api/v${this.transportOptions.version}`;
	}

	constructor({key, secret, version = '1.1', agent = false}: Partial<TransportOptions>) {
		assert(!!key, 'key is required');
		assert(!!secret, 'secret is required');

		this.transportOptions = {
			key: key,
			secret: secret,
			version: version,
			agent: agent
		};

		if (agent && typeof agent === 'boolean') {
			this.transportOptions.agent = new Agent({
				keepAlive: true,
				maxSockets: 100,
				maxFreeSockets: 10
			});
		}
	}

	public async request<T>(responseType: ClassType<T>, pathname: string, data = {}): Promise<T | T[]> {
		const {url, opts} = this.prepareRequest(pathname, data);
		return got(url, opts).then((response: got.Response<Object>) => {
			return this.handleResponse(responseType, response);
		});
	}

	private handleResponse<T>(responseType: ClassType<T>, response: got.Response<Object>): Promise<T | T[]> {
		return new Promise<T | T[]>((resolve, reject) => {
			let bittrexResponse: BittrexResponse = this.jsonConvert.deserialize(response.body, BittrexResponse);
			console.log(bittrexResponse);
			if (bittrexResponse.success) {
				let converted: any;
				if (bittrexResponse.result instanceof Array) {
					converted = this.jsonConvert.deserializeArray(bittrexResponse.result, responseType);
				} else {
					converted = this.jsonConvert.deserialize(bittrexResponse.result, responseType);
				}
				return resolve(converted);
			} else {
				return reject(bittrexResponse);
			}
		});
	}

	private prepareRequest(pathname: string, data = {}) {
		const url = `${this.baseUrl}${pathname}`;

		const query = {
			apikey: this.transportOptions.key,
			nonce: Math.floor(Date.now() / 1000),
			...this.removeUndefined(data)
		};

		const urlSigned = `${url}?${qs.stringify(query)}`;
		const signature = crypto.createHmac('sha512', this.transportOptions.secret)
			.update(urlSigned, 'utf8')
			.digest('hex');

		const opts = {
			agent: this.transportOptions.agent,
			json: true,
			headers: {
				'User-Agent': 'Mozilla/4.0 (compatible; bittrex-typescript)',
				apisign: signature
			}
		};

		return {url: urlSigned, opts: opts};
	}

	private removeUndefined(obj: any) {
		return Object.keys(obj).reduce((acc: any, key) => {
			const _acc = acc;
			if (obj[key] !== undefined) _acc[key] = obj[key];
			return _acc;
		}, {});
	}
}
