import { BalanceData, CurrencyData, MarketData, MarketSummaryData, OrderData, TickerData } from './model';
import { TransportOptions } from './Transport';
export interface Bittrex {
    options: TransportOptions;
    markets(): Promise<MarketData[]>;
    currencies(): Promise<CurrencyData[]>;
    ticker(market: string): Promise<TickerData>;
    marketSummary(market: string): Promise<MarketSummaryData>;
    marketSummaries(): Promise<MarketSummaryData[]>;
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
    currencies(): Promise<CurrencyData[]>;
    ticker(market: string): Promise<TickerData>;
    marketSummary(market: string): Promise<MarketSummaryData>;
    marketSummaries(): Promise<MarketSummaryData[]>;
    openOrders(market?: string): Promise<OrderData[]>;
    balance(currency: string): Promise<BalanceData>;
    balances(): Promise<BalanceData[]>;
    order(uuid: string): Promise<OrderData>;
    orders(market?: string): Promise<OrderData[]>;
}
