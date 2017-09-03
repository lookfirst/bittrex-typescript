import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject
export class DepositAddressData {
	@JsonProperty()
	Currency: string = undefined;
	@JsonProperty()
	Address: string = undefined;
}
