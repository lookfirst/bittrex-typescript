import {JsonObject, JsonProperty} from 'json2typescript';
import {DateConverter} from './DataConverter';

@JsonObject
export class DepositData {
	@JsonProperty('Id')
	Id: number = undefined;
	@JsonProperty()
	Currency: string = undefined;
	@JsonProperty()
	Confirmations: number = undefined;
	@JsonProperty('LastUpdated', DateConverter, false)
	LastUpdated: Date = undefined;
	@JsonProperty()
	TxId: string = undefined;
	@JsonProperty()
	CryptoAddress: string = undefined;
}
