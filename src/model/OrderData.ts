import BigNumber from 'bignumber.js';
import {JsonObject, JsonProperty} from 'json2typescript';
import {DateConverter} from './DateConverter';

@JsonObject
export class OrderData {
	@JsonProperty('Uuid', undefined, true)
	Uuid: string = undefined; // fd97d393-e9b9-4dd1-9dbf-f288fc72a185
	@JsonProperty()
	OrderUuid: string = undefined; // fd97d393-e9b9-4dd1-9dbf-f288fc72a185
	@JsonProperty()
	Exchange: string = undefined; // BTC-LTC
	@JsonProperty('TimeStamp', DateConverter, true)
	TimeStamp: Date = undefined; // 2014-07-09T04:01:00.667
	@JsonProperty()
	OrderType: string = undefined; // LIMIT_BUY
	@JsonProperty()
	Limit: BigNumber = undefined; // 0.00000001
	@JsonProperty()
	Quantity: BigNumber = undefined; // 100000.00000000
	@JsonProperty()
	QuantityRemaining: BigNumber = undefined; // 100000.00000000
	@JsonProperty('Commission', undefined, true)
	Commission: BigNumber = undefined; // 0.00000000
	@JsonProperty('CommissionPaid', undefined, true)
	CommissionPaid: BigNumber = undefined; // 0.00000000
	@JsonProperty()
	Price: BigNumber = undefined; // 0.00000000
	@JsonProperty()
	PricePerUnit: BigNumber = undefined; // 0.00000000
	@JsonProperty()
	IsConditional: boolean = undefined; // false
	@JsonProperty()
	Condition: string = undefined; // null
	@JsonProperty()
	ConditionTarget: string = undefined; // null
	@JsonProperty()
	ImmediateOrCancel: boolean = undefined; // false
	@JsonProperty('Opened', DateConverter, true)
	Opened: Date = undefined;
	@JsonProperty('Closed', DateConverter, true)
	Closed: Date = undefined;
	@JsonProperty('CancelInitiated', undefined, true)
	CancelInitiated: boolean = undefined;
}
