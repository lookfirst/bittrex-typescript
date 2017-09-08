import BigNumber from 'bignumber.js';
import {JsonObject, JsonProperty} from 'json2typescript';
import {BigNumberConverter, DateConverter} from './DataConverter';

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
	@JsonProperty('OrderType', undefined, true)
	OrderType: string = undefined; // LIMIT_BUY
	/** /account/getorder returns Type: */
	@JsonProperty('Type', undefined, true)
	Type: string = undefined; // LIMIT_BUY
	@JsonProperty('Limit', BigNumberConverter, true)
	Limit: BigNumber = undefined; // 0.00000001
	@JsonProperty('Quantity', BigNumberConverter, false)
	Quantity: BigNumber = undefined; // 100000.00000000
	@JsonProperty('QuantityRemaining', BigNumberConverter, false)
	QuantityRemaining: BigNumber = undefined; // 100000.00000000
	@JsonProperty('Commission', BigNumberConverter, true)
	Commission: BigNumber = undefined; // 0.00000000
	@JsonProperty('CommissionPaid', BigNumberConverter, true)
	CommissionPaid: BigNumber = undefined; // 0.00000000
	@JsonProperty('Price', BigNumberConverter, false)
	Price: BigNumber = undefined; // 0.00000000
	@JsonProperty('PricePerUnit', BigNumberConverter, false)
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
