import {BalanceData, CurrencyData, MarketData, MarketSummaryData, OrderData, TickerData} from './model';
import {TransportOptions, Transport} from './Transport';

export interface Bittrex {
	options: TransportOptions;

	// public

	markets(): Promise<MarketData[]>;
	currencies(): Promise<CurrencyData[]>;
	ticker(market: string): Promise<TickerData>;
	marketSummary(market: string): Promise<MarketSummaryData>;
	marketSummaries(): Promise<MarketSummaryData[]>;
	// orderBook(market: string, type: 'buy' | 'sell' | 'both', depth?: number): Promise<OrderBook>;
	// marketHistory(market: string): Promise<MarketHistory[]>;

	// market

	// buyLimit(market: string, quantity: number | string | BigNumber, rate: number | string | BigNumber): Promise<OrderResult>;
	// sellLimit(market: string, quantity: number | string | BigNumber, rate: number | string | BigNumber): Promise<OrderResult>;
	// cancel(uuid: string): Promise<void>;
	openOrders(market: string): Promise<OrderData[]>;

	// account

	balances(): Promise<BalanceData[]>;
	balance(currency: string): Promise<BalanceData>;
	// depositAddress(currency: string): Promise<DepositAddress>;
	// withdraw(currency: string, quantity: BigNumber, address: string, paymentid?: string): Promise<WithdrawalConfirmation>;
	order(uuid: string): Promise<OrderData>;
	orders(market?: string): Promise<OrderData[]>;
	// withdrawalHistory(currency?: string): Promise<Transaction[]>;
	// depositHistory(currency?: string): Promise<Transaction[]>;
}

export class BittrexClient implements Bittrex {
	private transport: Transport;

	constructor(public options: TransportOptions) {
		this.transport = new Transport(options);
	}

	// public

	public async markets(): Promise<MarketData[]> {
		return this.transport.request(MarketData, '/public/getmarkets') as Promise<MarketData[]>;
	}

	public async currencies(): Promise<CurrencyData[]> {
		return this.transport.request(CurrencyData, '/public/getcurrencies') as Promise<CurrencyData[]>;
	}

	public async ticker(market: string): Promise<TickerData> {
		return this.transport.request(TickerData, '/public/getticker', {market: market}) as Promise<TickerData>;
	}

	public async marketSummary(market: string): Promise<MarketSummaryData> {
		return this.transport.request(MarketSummaryData, '/public/getmarketsummary', {market: market}) as Promise<MarketSummaryData>;
	}

	public async marketSummaries(): Promise<MarketSummaryData[]> {
		return this.transport.request(MarketSummaryData, '/public/getmarketsummaries') as Promise<MarketSummaryData[]>;
	}

	// market

	public async openOrders(market?: string): Promise<OrderData[]> {
		return this.transport.request(OrderData, '/market/getopenorders', {market: market}) as Promise<OrderData[]>;
	}

	// account

	public async balance(currency: string): Promise<BalanceData> {
		return this.transport.request(BalanceData, '/account/getbalance', {currency: currency}) as Promise<BalanceData>;
	}

	public async balances(): Promise<BalanceData[]> {
		return this.transport.request(BalanceData, '/account/getbalances') as Promise<BalanceData[]>;
	}

	public async order(uuid: string): Promise<OrderData> {
		return this.transport.request(OrderData, '/account/getorder', {uuid: uuid}) as Promise<OrderData>;
	}

	public async orders(market?: string): Promise<OrderData[]> {
		return this.transport.request(OrderData, '/account/getorderhistory', {market: market}) as Promise<OrderData[]>;
	}
}
