import BigNumber from 'bignumber.js';
import {JsonObject, JsonProperty} from 'json2typescript';
import {BigNumberConverter} from './DataConverter';

@JsonObject
export class TickerData {
	@JsonProperty('Bid', BigNumberConverter, false)
	Bid: BigNumber = undefined;
	@JsonProperty('Ask', BigNumberConverter, false)
	Ask: BigNumber = undefined;
	@JsonProperty('Last', BigNumberConverter, false)
	Last: BigNumber = undefined;
}
