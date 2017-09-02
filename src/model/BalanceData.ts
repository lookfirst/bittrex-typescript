import BigNumber from 'bignumber.js';
import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject
export class BalanceData {
	@JsonProperty()
	Currency: string = undefined;
	@JsonProperty()
	Balance: BigNumber = undefined;
	@JsonProperty()
	Available: BigNumber = undefined;
	@JsonProperty()
	Pending: BigNumber = undefined;
	@JsonProperty()
	CryptoAddress: string = undefined;
	@JsonProperty('Requested', undefined, true)
	Requested: boolean = undefined;
	@JsonProperty('Uuid', undefined, true)
	Uuid: string = undefined;
}
