import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject
export class UuidData {
	@JsonProperty()
	uuid: string = undefined;
}
