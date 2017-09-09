import BigNumber from 'bignumber.js';
import {JsonObject, JsonProperty} from 'json2typescript';
import {BigNumberConverter} from './DataConverter';

@JsonObject
export class TickerData {
	private static ONE = new BigNumber(1);

	@JsonProperty('Bid', BigNumberConverter, false)
	Bid: BigNumber = undefined;
	@JsonProperty('Ask', BigNumberConverter, false)
	Ask: BigNumber = undefined;
	@JsonProperty('Last', BigNumberConverter, false)
	Last: BigNumber = undefined;

	public invert(): TickerData {
		return Object.assign(new TickerData(), {
			Bid: TickerData.ONE.dividedBy(this.Bid),
			Ask: TickerData.ONE.dividedBy(this.Ask),
			Last: TickerData.ONE.dividedBy(this.Last)
		});
	}
}
