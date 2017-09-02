/// <reference types="node" />
import { BalanceData, CurrencyData, MarketData, MarketSummaryData, OrderBookData, OrderData, TickerData } from './model';
import { Agent } from 'https';
import { OrderBookItem } from './model/OrderBookData';
export interface Bittrex {
    markets(): Promise<MarketData[]>;
    currencies(): Promise<CurrencyData[]>;
    ticker(market: string): Promise<TickerData>;
    marketSummary(market: string): Promise<MarketSummaryData>;
    marketSummaries(): Promise<MarketSummaryData[]>;
    orderBook(market: string, type: 'buy' | 'sell' | 'both'): Promise<OrderBookData | OrderBookItem[]>;
    openOrders(market: string): Promise<OrderData[]>;
    balances(): Promise<BalanceData[]>;
    balance(currency: string): Promise<BalanceData>;
    order(uuid: string): Promise<OrderData>;
    orders(market?: string): Promise<OrderData[]>;
}
export declare class BittrexOptions {
    key: string;
    secret: string;
    agent?: boolean | Agent | null;
}
export declare class BittrexClient implements Bittrex {
    private transport;
    private static BASE_URL;
    constructor(options: BittrexOptions);
    markets(): Promise<MarketData[]>;
    currencies(): Promise<CurrencyData[]>;
    ticker(market: string): Promise<TickerData>;
    marketSummary(market: string): Promise<MarketSummaryData>;
    marketSummaries(): Promise<MarketSummaryData[]>;
    orderBook(market: string, type: 'buy' | 'sell' | 'both'): Promise<OrderBookData | OrderBookItem[]>;
    openOrders(market?: string): Promise<OrderData[]>;
    balance(currency: string): Promise<BalanceData>;
    balances(): Promise<BalanceData[]>;
    order(uuid: string): Promise<OrderData>;
    orders(market?: string): Promise<OrderData[]>;
}
