import {
	BalanceData,
	CurrencyData,
	DepositAddressData,
	MarketData,
	MarketHistoryData,
	MarketSummaryData,
	OrderBookData,
	OrderData,
	TickerData,
	UuidData
} from './model';
import {Transport} from './Transport';
import {Agent} from 'https';
import {OrderBookItem} from './model/OrderBookData';
import BigNumber from 'bignumber.js';
import {RetryOptions, RetryPromise} from 'retry-promise-typescript';

export interface Bittrex {
	// public

	markets(): Promise<MarketData[]>;

	currencies(): Promise<CurrencyData[]>;

	ticker(market: string): Promise<TickerData>;

	marketHistory(market: string): Promise<MarketHistoryData[]>;

	marketSummary(market: string): Promise<MarketSummaryData>;

	marketSummaries(): Promise<MarketSummaryData[]>;

	orderBook(market: string, type: 'buy' | 'sell' | 'both'): Promise<OrderBookData | OrderBookItem[]>;


	// market

	buyLimit(market: string, quantity: number | string | BigNumber, rate: number | string | BigNumber): Promise<UuidData>;

	sellLimit(market: string, quantity: number | string | BigNumber, rate: number | string | BigNumber): Promise<UuidData>;

	cancel(uuid: string): Promise<null>;

	openOrders(market: string): Promise<OrderData[]>;

	// account

	balance(currency: string): Promise<BalanceData>;

	balances(): Promise<BalanceData[]>;

	order(uuid: string): Promise<OrderData>;

	orders(market?: string): Promise<OrderData[]>;

	depositAddress(currency: string, retryOptions?: RetryOptions): Promise<DepositAddressData>;

	// withdraw(currency: string, quantity: BigNumber, address: string, paymentid?: string): Promise<WithdrawalConfirmation>;

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

	public async marketHistory(market: string): Promise<MarketHistoryData[]> {
		return this.transport.request(MarketHistoryData, '/public/getmarkethistory', {market: market}) as Promise<MarketHistoryData[]>;
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

	public buyLimit(market: string, quantity: number | string | BigNumber, rate: number | string | BigNumber): Promise<UuidData> {
		return this.transport.request(UuidData, '/market/buylimit', {
			market: market,
			quantity: quantity,
			rate: rate
		}) as Promise<UuidData>;
	}

	public sellLimit(market: string, quantity: number | string | BigNumber, rate: number | string | BigNumber): Promise<UuidData> {
		return this.transport.request(UuidData, '/market/selllimit', {
			market: market,
			quantity: quantity,
			rate: rate
		}) as Promise<UuidData>;
	}

	public cancel(uuid: string): Promise<null> {
		return this.transport.request(null, '/market/cancel', {uuid: uuid}) as Promise<null>;
	}

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

	public async depositAddress(currency: string, retryOptions?: RetryOptions): Promise<DepositAddressData> {
		return new RetryPromise(retryOptions).retry(
			this.transport.request(DepositAddressData, '/account/getdepositaddress', {currency: currency}) as Promise<DepositAddressData>
		);
	}
}
