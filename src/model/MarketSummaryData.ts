import BigNumber from 'bignumber.js';
import {JsonObject, JsonProperty} from 'json2typescript';
import {BigNumberConverter, DateConverter} from './DataConverter';

@JsonObject
export class MarketSummaryData {
	@JsonProperty('DisplayMarketName', undefined, true)
	DisplayMarketName: string = undefined;
	@JsonProperty()
	MarketName: string = undefined;
	@JsonProperty('High', BigNumberConverter, false)
	High: BigNumber = undefined;
	@JsonProperty('Low', BigNumberConverter, false)
	Low: BigNumber = undefined;
	@JsonProperty('Volume', BigNumberConverter, false)
	Volume: BigNumber = undefined;
	@JsonProperty('Last', BigNumberConverter, false)
	Last: BigNumber = undefined;
	@JsonProperty('BaseVolume', BigNumberConverter, false)
	BaseVolume: BigNumber = undefined;
	@JsonProperty('TimeStamp', DateConverter, false)
	TimeStamp: Date = undefined;
	@JsonProperty('Bid', BigNumberConverter, false)
	Bid: BigNumber = undefined;
	@JsonProperty('Ask', BigNumberConverter, false)
	Ask: BigNumber = undefined;
	@JsonProperty()
	OpenBuyOrders: number = undefined;
	@JsonProperty()
	OpenSellOrders: number = undefined;
	@JsonProperty('PrevDay', BigNumberConverter, false)
	PrevDay: BigNumber = undefined;
	@JsonProperty('Created', DateConverter, false)
	Created: Date = undefined;
}
