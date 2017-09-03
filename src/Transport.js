"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const crypto = require("crypto");
const qs = require("query-string");
const got = require("got");
const json2typescript_1 = require("json2typescript");
const https_1 = require("https");
class BittrexResponse {
}
exports.BittrexResponse = BittrexResponse;
class Transport {
    constructor(transportOptions) {
        this.transportOptions = transportOptions;
        this.jsonConvert = new json2typescript_1.JsonConvert();
        assert(!!this.transportOptions.key, 'key is required');
        assert(!!this.transportOptions.secret, 'secret is required');
        if (this.transportOptions.agent && typeof this.transportOptions.agent === 'boolean') {
            this.transportOptions.agent = new https_1.Agent({
                keepAlive: true,
                maxSockets: 100,
                maxFreeSockets: 10
            });
        }
    }
    async request(responseType, pathname, data = {}) {
        const { url, opts } = this.prepareRequest(pathname, data);
        return got(url, opts).then((response) => {
            return this.handleResponse(responseType, response);
        });
    }
    handleResponse(responseType, response) {
        return new Promise((resolve, reject) => {
            let bittrexResponse = response.body;
            if (bittrexResponse.success) {
                return resolve(this.jsonConvert.deserialize(bittrexResponse.result, responseType));
            }
            else {
                return reject(Object.assign(new BittrexResponse(), bittrexResponse));
            }
        });
    }
    prepareRequest(pathname, data = {}) {
        const url = `${this.transportOptions.baseUrl}${pathname}`;
        const query = Object.assign({ apikey: this.transportOptions.key, nonce: Math.floor(Date.now() / 1000) }, this.removeUndefined(data));
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
        return { url: urlSigned, opts: opts };
    }
    removeUndefined(obj) {
        return Object.keys(obj).reduce((acc, key) => {
            const _acc = acc;
            if (obj[key] !== undefined)
                _acc[key] = obj[key];
            return _acc;
        }, {});
    }
}
exports.Transport = Transport;
//# sourceMappingURL=Transport.js.map