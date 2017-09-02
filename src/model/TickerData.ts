import BigNumber from 'bignumber.js';
import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject
export class TickerData {
	@JsonProperty()
	Bid: BigNumber = undefined;
	@JsonProperty()
	Ask: BigNumber = undefined;
	@JsonProperty()
	Last: BigNumber = undefined;
}
