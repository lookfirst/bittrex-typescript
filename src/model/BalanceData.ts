import BigNumber from 'bignumber.js';
import {JsonObject, JsonProperty} from 'json2typescript';
import {BigNumberConverter} from './DataConverter';

@JsonObject
export class BalanceData {
	@JsonProperty()
	Currency: string = undefined;
	@JsonProperty('Balance', BigNumberConverter, false)
	Balance: BigNumber = undefined;
	@JsonProperty('Available', BigNumberConverter, false)
	Available: BigNumber = undefined;
	@JsonProperty('Pending', BigNumberConverter, false)
	Pending: BigNumber = undefined;
	@JsonProperty()
	CryptoAddress: string = undefined;
	@JsonProperty('Requested', undefined, true)
	Requested: boolean = undefined;
	@JsonProperty('Uuid', undefined, true)
	Uuid: string = undefined;
}
