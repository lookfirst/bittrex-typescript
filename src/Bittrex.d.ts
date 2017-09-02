import { BalanceData, OrderHistoryData, TickerData } from './model';
import { TransportOptions } from './Transport';
export interface Bittrex {
    options: TransportOptions;
    ticker(market: string): Promise<TickerData>;
    balances(): Promise<BalanceData[]>;
    orderHistory(market?: string): Promise<OrderHistoryData[]>;
}
export declare class BittrexClient implements Bittrex {
    options: TransportOptions;
    private transport;
    constructor(options: TransportOptions);
    balances(): Promise<BalanceData[]>;
    ticker(market: string): Promise<TickerData>;
    orderHistory(market?: string): Promise<OrderHistoryData[]>;
}
