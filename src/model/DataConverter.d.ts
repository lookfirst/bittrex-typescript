import { JsonCustomConvert } from 'json2typescript';
import BigNumber from 'bignumber.js';
export declare class DateConverter implements JsonCustomConvert<Date> {
    serialize(date: Date): any;
    deserialize(date: any): Date;
}
export declare class BigNumberConverter implements JsonCustomConvert<BigNumber> {
    serialize(big: BigNumber): any;
    deserialize(big: any): BigNumber;
}
