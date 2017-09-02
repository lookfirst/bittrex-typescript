import BigNumber from 'bignumber.js';
import {JsonObject, JsonProperty} from 'json2typescript';
import {BigNumberConverter, DateConverter} from './DataConverter';

@JsonObject
export class MarketHistoryData {
	@JsonProperty()
	Id: number = undefined;
	@JsonProperty('TimeStamp', DateConverter, false)
	TimeStamp: Date = undefined;
	@JsonProperty('Quantity', BigNumberConverter, false)
	Quantity: BigNumber = undefined;
	@JsonProperty('Price', BigNumberConverter, false)
	Price: BigNumber = undefined;
	@JsonProperty('Total', BigNumberConverter, false)
	Total: BigNumber = undefined;
	@JsonProperty()
	OrderType: string = undefined;
}
