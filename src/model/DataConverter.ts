import {JsonConverter, JsonCustomConvert} from 'json2typescript';
import BigNumber from 'bignumber.js';

// Disable the error about 15 decimal places
// Happens during Bittrex.marketSummaries()
const BN = BigNumber.another({ERRORS: false});

@JsonConverter
export class DateConverter implements JsonCustomConvert<Date> {
	serialize(date: Date): any {
		return date.toTimeString();
	}

	deserialize(date: any): Date {
		return new Date(date + 'Z');
	}
}

@JsonConverter
export class BigNumberConverter implements JsonCustomConvert<BigNumber> {
	serialize(big: BigNumber): any {
		return new BN(big).toNumber();
	}

	deserialize(big: any): BigNumber {
		return big ? new BN(big) : null;
	}
}
