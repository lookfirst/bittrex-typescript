import BigNumber from 'bignumber.js';
import {JsonObject, JsonProperty} from 'json2typescript';
import {BigNumberConverter, DateConverter} from './DataConverter';

@JsonObject
export class MarketData {
	@JsonProperty()
	MarketCurrency: string = undefined;
	@JsonProperty()
	BaseCurrency: string = undefined;
	@JsonProperty()
	MarketCurrencyLong: string = undefined;
	@JsonProperty()
	BaseCurrencyLong: string = undefined;
	@JsonProperty('MinTradeSize', BigNumberConverter, false)
	MinTradeSize: BigNumber = undefined;
	@JsonProperty()
	MarketName: string = undefined;
	@JsonProperty()
	IsActive: boolean = undefined;
	@JsonProperty('Created', DateConverter, false)
	Created: Date = undefined;
}
