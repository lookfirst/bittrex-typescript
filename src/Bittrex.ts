import {BalanceData, OrderHistoryData, TickerData} from './model';
import {TransportOptions, Transport} from './Transport';

export interface Bittrex {
	options: TransportOptions;

	// public

	// markets(): Promise<Market[]>;
	// currencies(): Promise<Currency[]>;
	ticker(market: string): Promise<TickerData>;
	// marketSummaries(): Promise<MarketSummary[]>;
	// marketSummary(market: string): Promise<MarketSummary>;
	// orderBook(market: string, type: 'buy' | 'sell' | 'both', depth?: number): Promise<OrderBook>;
	// marketHistory(market: string): Promise<MarketHistory[]>;

	// market

	// buyLimit(market: string, quantity: number | string | BigNumber, rate: number | string | BigNumber): Promise<OrderResult>;
	// sellLimit(market: string, quantity: number | string | BigNumber, rate: number | string | BigNumber): Promise<OrderResult>;
	// cancel(uuid: string): Promise<void>;
	// openOrders(market: string): Promise<OpenOrder[]>;

	// account

	balances(): Promise<BalanceData[]>;
	balance(currency: string): Promise<BalanceData>;
	// depositAddress(currency: string): Promise<DepositAddress>;
	// withdraw(currency: string, quantity: BigNumber, address: string, paymentid?: string): Promise<WithdrawalConfirmation>;
	// order(uuid: string): Promise<Order>;
	orderHistory(market?: string): Promise<OrderHistoryData[]>;
	// withdrawalHistory(currency?: string): Promise<Transaction[]>;
	// depositHistory(currency?: string): Promise<Transaction[]>;
}

export class BittrexClient implements Bittrex {
	private transport: Transport;

	constructor(public options: TransportOptions) {
		this.transport = new Transport(options);
	}

	public async balance(currency: string): Promise<BalanceData> {
		return this.transport.request(BalanceData, '/account/getbalance', {currency: currency}) as Promise<BalanceData>;
	}

	public async balances(): Promise<BalanceData[]> {
		return this.transport.request(BalanceData, '/account/getbalances') as Promise<BalanceData[]>;
	}

	public async ticker(market: string): Promise<TickerData> {
		return this.transport.request(TickerData, '/public/getticker', {market: market}) as Promise<TickerData>;
	}

	public async orderHistory(market?: string): Promise<OrderHistoryData[]> {
		return this.transport.request(OrderHistoryData, '/account/getorderhistory', {market: market}) as Promise<OrderHistoryData[]>;
	}
}
