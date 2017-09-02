import { BalanceData, MarketData, OrderData, TickerData } from './model';
import { TransportOptions } from './Transport';
export interface Bittrex {
    options: TransportOptions;
    markets(): Promise<MarketData[]>;
    ticker(market: string): Promise<TickerData>;
    openOrders(market: string): Promise<OrderData[]>;
    balances(): Promise<BalanceData[]>;
    balance(currency: string): Promise<BalanceData>;
    order(uuid: string): Promise<OrderData>;
    orders(market?: string): Promise<OrderData[]>;
}
export declare class BittrexClient implements Bittrex {
    options: TransportOptions;
    private transport;
    constructor(options: TransportOptions);
    markets(): Promise<MarketData[]>;
    ticker(market: string): Promise<TickerData>;
    openOrders(market?: string): Promise<OrderData[]>;
    balance(currency: string): Promise<BalanceData>;
    balances(): Promise<BalanceData[]>;
    order(uuid: string): Promise<OrderData>;
    orders(market?: string): Promise<OrderData[]>;
}
