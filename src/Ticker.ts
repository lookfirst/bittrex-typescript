import BigNumber from 'bignumber.js';
import {JsonObject, JsonProperty} from 'json2typescript';

export interface Ticker {
	Bid: BigNumber;
	Ask: BigNumber;
	Last: BigNumber;
}

@JsonObject
export class TickerData implements Ticker {
	@JsonProperty()
	Bid: BigNumber = undefined;
	@JsonProperty()
	Ask: BigNumber = undefined;
	@JsonProperty()
	Last: BigNumber = undefined;
}
