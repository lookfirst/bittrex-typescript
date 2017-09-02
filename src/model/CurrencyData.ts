import BigNumber from 'bignumber.js';
import {JsonObject, JsonProperty} from 'json2typescript';
import {BigNumberConverter} from './DataConverter';

@JsonObject
export class CurrencyData {
	@JsonProperty()
	Currency: string = undefined;
	@JsonProperty()
	CurrencyLong: string = undefined;
	@JsonProperty()
	MinConfirmation: number = undefined;
	@JsonProperty('TxFee', BigNumberConverter, false)
	TxFee: BigNumber = undefined;
	@JsonProperty()
	IsActive: boolean = undefined;
	@JsonProperty()
	CoinType: string = undefined;
	@JsonProperty()
	BaseAddress: string = undefined;
}
