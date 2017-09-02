import { JsonCustomConvert } from 'json2typescript';
export declare class DateConverter implements JsonCustomConvert<Date> {
    serialize(date: Date): any;
    deserialize(date: any): Date;
}
