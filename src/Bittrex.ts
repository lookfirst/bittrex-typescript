import {BalanceData, CurrencyData, MarketData, MarketSummaryData, OrderBookData, OrderData, TickerData} from './model';
import {Transport} from './Transport';
import {Agent} from 'https';
import {OrderBookItem} from './model/OrderBookData';

export interface Bittrex {
	// public

	markets(): Promise<MarketData[]>;
	currencies(): Promise<CurrencyData[]>;
	ticker(market: string): Promise<TickerData>;
	marketSummary(market: string): Promise<MarketSummaryData>;
	marketSummaries(): Promise<MarketSummaryData[]>;
	orderBook(market: string, type: 'buy' | 'sell' | 'both'): Promise<OrderBookData | OrderBookItem[]>;
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

export class BittrexOptions {
	key: string;
	secret: string;
	agent?: boolean | Agent | null;
}

export class BittrexClient implements Bittrex {
	private transport: Transport;
	private static BASE_URL: string = 'https://bittrex.com/api/v1.1';

	constructor(options: BittrexOptions) {
		this.transport = new Transport({
			...options,
			baseUrl: BittrexClient.BASE_URL
		});
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

	public async orderBook(market: string, type: 'buy' | 'sell' | 'both'): Promise<OrderBookData | OrderBookItem[]> {
		const pathname = '/public/getorderbook';
		const data = {market: market, type: type};
		if (type === 'both')
			return this.transport.request(OrderBookData, pathname, data) as Promise<OrderBookData>;
		else
			return this.transport.request(OrderBookItem, pathname, data) as Promise<OrderBookItem[]>;
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
