/// <reference types="node" />
import { Agent } from 'https';
export declare type ClassType<T> = {
    new (...args: any[]): T;
};
export interface TransportOptions {
    key: string;
    secret: string;
    version?: '1.0' | '1.1';
    agent?: boolean | Agent;
}
export declare class BittrexResponse {
    success: boolean;
    message: string;
    result: object | object[] | null;
}
export declare class Transport {
    private transportOptions;
    private jsonConvert;
    private readonly baseUrl;
    constructor({key, secret, version, agent}: Partial<TransportOptions>);
    request<T>(responseType: ClassType<T>, pathname: string, data?: {}): Promise<T | T[]>;
    private handleResponse<T>(responseType, response);
    private prepareRequest(pathname, data?);
    private removeUndefined(obj);
}
