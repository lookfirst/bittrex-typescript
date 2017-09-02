import BigNumber from 'bignumber.js';
import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject
export class OrderHistoryData {
	@JsonProperty()
	OrderUuid: string = undefined; // fd97d393-e9b9-4dd1-9dbf-f288fc72a185
	@JsonProperty()
	Exchange: string = undefined; // BTC-LTC
	@JsonProperty()
	TimeStamp: Date = undefined; // 2014-07-09T04:01:00.667
	@JsonProperty()
	OrderType: string = undefined; // LIMIT_BUY
	@JsonProperty()
	Limit: BigNumber = undefined; // 0.00000001
	@JsonProperty()
	Quantity: BigNumber = undefined; // 100000.00000000
	@JsonProperty()
	QuantityRemaining: BigNumber = undefined; // 100000.00000000
	@JsonProperty()
	Commission: BigNumber = undefined; // 0.00000000
	@JsonProperty()
	Price: BigNumber = undefined; // 0.00000000
	@JsonProperty()
	PricePerUnit: BigNumber = undefined; // 0.00000000
	@JsonProperty()
	IsConditional: boolean = undefined; // false
	@JsonProperty()
	Condition: null = undefined; // null
	@JsonProperty()
	ConditionTarget: null = undefined; // null
	@JsonProperty()
	ImmediateOrCancel: boolean = undefined; // false
}
