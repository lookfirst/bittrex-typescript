/// <reference types="node" />
import { BalanceData, CurrencyData, DepositAddressData, MarketData, MarketHistoryData, MarketSummaryData, OrderBookData, OrderData, TickerData, UuidData } from './model';
import { Agent } from 'https';
import { OrderBookItem } from './model/OrderBookData';
import BigNumber from 'bignumber.js';
import { RetryOptions } from 'retry-promise-typescript';
export interface Bittrex {
    markets(): Promise<MarketData[]>;
    currencies(): Promise<CurrencyData[]>;
    ticker(market: string): Promise<TickerData>;
    marketHistory(market: string): Promise<MarketHistoryData[]>;
    marketSummary(market: string): Promise<MarketSummaryData>;
    marketSummaries(): Promise<MarketSummaryData[]>;
    orderBook(market: string, type: 'buy' | 'sell' | 'both'): Promise<OrderBookData | OrderBookItem[]>;
    buyLimit(market: string, quantity: number | string | BigNumber, rate: number | string | BigNumber): Promise<UuidData>;
    sellLimit(market: string, quantity: number | string | BigNumber, rate: number | string | BigNumber): Promise<UuidData>;
    cancel(uuid: string): Promise<null>;
    openOrders(market: string): Promise<OrderData[]>;
    balance(currency: string): Promise<BalanceData>;
    balances(): Promise<BalanceData[]>;
    order(uuid: string): Promise<OrderData>;
    orders(market?: string): Promise<OrderData[]>;
    depositAddress(currency: string, retryOptions?: RetryOptions): Promise<DepositAddressData>;
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
    marketHistory(market: string): Promise<MarketHistoryData[]>;
    marketSummary(market: string): Promise<MarketSummaryData>;
    marketSummaries(): Promise<MarketSummaryData[]>;
    orderBook(market: string, type: 'buy' | 'sell' | 'both'): Promise<OrderBookData | OrderBookItem[]>;
    buyLimit(market: string, quantity: number | string | BigNumber, rate: number | string | BigNumber): Promise<UuidData>;
    sellLimit(market: string, quantity: number | string | BigNumber, rate: number | string | BigNumber): Promise<UuidData>;
    cancel(uuid: string): Promise<null>;
    openOrders(market?: string): Promise<OrderData[]>;
    balance(currency: string): Promise<BalanceData>;
    balances(): Promise<BalanceData[]>;
    order(uuid: string): Promise<OrderData>;
    orders(market?: string): Promise<OrderData[]>;
    depositAddress(currency: string, retryOptions?: RetryOptions): Promise<DepositAddressData>;
}
