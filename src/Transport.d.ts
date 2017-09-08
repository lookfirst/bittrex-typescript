/// <reference types="node" />
import { Agent } from 'https';
export declare type ClassType<T> = {
    new (...args: any[]): T;
};
export interface TransportOptions {
    key: string;
    secret: string;
    baseUrl: string;
    agent?: boolean | Agent;
}
export declare class BittrexResponse {
    success: boolean;
    message: string;
    result: object | object[] | null;
    pathname?: string;
    data?: object;
    error?: any;
}
export declare class Transport {
    transportOptions: TransportOptions;
    private jsonConvert;
    constructor(transportOptions: TransportOptions);
    request<T>(responseType: ClassType<T>, pathname: string, data?: {}): Promise<T | T[]>;
    private makeRejection(pathname, data, error, bittrexResponse);
    private handleResponse<T>(responseType, response, pathname, data);
    private prepareRequest(pathname, data?);
    private removeUndefined(obj);
}
