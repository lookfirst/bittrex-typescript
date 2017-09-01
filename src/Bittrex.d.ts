import { Ticker } from './Ticker';
import { TransportOptions } from './Transport';
import { OrderHistory } from './OrderHistory';
export interface Bittrex {
    options: TransportOptions;
    ticker(market: string): Promise<Ticker>;
    orderHistory(market?: string): Promise<OrderHistory[]>;
}
export declare class BittrexClient implements Bittrex {
    options: TransportOptions;
    private transport;
    constructor(options: TransportOptions);
    ticker(market: string): Promise<Ticker>;
    orderHistory(market?: string): Promise<OrderHistory[]>;
}
