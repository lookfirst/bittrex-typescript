import BigNumber from 'bignumber.js';
import {JsonObject, JsonProperty} from 'json2typescript';
import {BigNumberConverter, DateConverter} from './DataConverter';

@JsonObject
export class WithdrawalData {
	@JsonProperty('PaymentUuid', undefined, true)
	PaymentUuid: string = undefined;
	@JsonProperty()
	Currency: string = undefined;
	@JsonProperty('Amount', BigNumberConverter, false)
	Amount: BigNumber = undefined;
	@JsonProperty('Opened', DateConverter, false)
	Opened: Date = undefined;
	@JsonProperty()
	Authorized: boolean = undefined;
	@JsonProperty()
	PendingPayment: boolean = undefined;
	@JsonProperty('TxCost', BigNumberConverter, false)
	TxCost: BigNumber = undefined;
	@JsonProperty()
	TxId: string = undefined;
	@JsonProperty()
	Canceled: boolean = undefined;
	@JsonProperty()
	InvalidAddress: boolean = undefined;
}
