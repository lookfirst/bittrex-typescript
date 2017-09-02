import BigNumber from 'bignumber.js';
import {JsonConvert, JsonObject, JsonProperty, JsonConverter, JsonCustomConvert} from 'json2typescript';
import {BigNumberConverter} from './DataConverter';

@JsonConverter
class OrderBookItemConverter implements JsonCustomConvert<OrderBookItem[]> {
	private jsonConvert: JsonConvert = new JsonConvert();

	serialize(obi: OrderBookItem[]): any {
		return obi;
	}
	deserialize(objects: object[]): OrderBookItem[] {
		return objects.map((obj) => {
			return this.jsonConvert.deserialize(obj, OrderBookItem);
		});
	}
}

@JsonObject
export class OrderBookItem {
	@JsonProperty('Quantity', BigNumberConverter, false)
	Quantity: BigNumber = undefined;
	@JsonProperty('Rate', BigNumberConverter, false)
	Rate: BigNumber = undefined;
}

@JsonObject
export class OrderBookData {
	@JsonProperty('buy', OrderBookItemConverter, false)
	buy: OrderBookItem[] = undefined;
	@JsonProperty('sell', OrderBookItemConverter, false)
	sell: OrderBookItem[] = undefined;
}
