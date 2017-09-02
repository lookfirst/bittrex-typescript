import {JsonConverter, JsonCustomConvert} from 'json2typescript';
import BigNumber from 'bignumber.js';

// Disable the error about 15 decimal places
// Happens during Bittrex.marketSummaries()
BigNumber.config({ERRORS: false});

@JsonConverter
export class DateConverter implements JsonCustomConvert<Date> {
	serialize(date: Date): any {
		return date.toTimeString();
	}

	deserialize(date: any): Date {
		return date ? new Date(date) : null;
	}
}

@JsonConverter
export class BigNumberConverter implements JsonCustomConvert<BigNumber> {
	serialize(big: BigNumber): any {
		return big.toNumber();
	}

	deserialize(big: any): BigNumber {
		return big ? new BigNumber(big) : null;
	}
}
