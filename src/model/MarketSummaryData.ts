import BigNumber from 'bignumber.js';
import {JsonObject, JsonProperty} from 'json2typescript';
import {BigNumberConverter, DateConverter} from './DataConverter';


@JsonObject
export class MarketSummaryData {
	private static ONE = new BigNumber(1);

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

	@JsonProperty('inverted', undefined, true)
	inverted: boolean = false;

	public invert(): MarketSummaryData {
		return Object.assign(new MarketSummaryData(), this,{
			DisplayMarketName: this.MarketName,
			MarketName: this.DisplayMarketName,
			Last: MarketSummaryData.ONE.dividedBy(this.Last),
			Ask: MarketSummaryData.ONE.dividedBy(this.Ask),
			Bid: MarketSummaryData.ONE.dividedBy(this.Bid),
			High: MarketSummaryData.ONE.dividedBy(this.High),
			Low: MarketSummaryData.ONE.dividedBy(this.Low),
			PrevDay: MarketSummaryData.ONE.dividedBy(this.PrevDay),
			OpenSellOrders: this.OpenBuyOrders,
			OpenBuyOrders: this.OpenSellOrders,
			BaseVolume: this.Volume,
			Volume: this.BaseVolume,
			inverted: true
		});
	}
}
