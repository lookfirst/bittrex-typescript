import {Ticker, TickerData} from './Ticker';
import {TransportOptions, Transport} from './Transport';
import {OrderHistory, OrderHistoryData} from './OrderHistory';

export interface Bittrex {
	options: TransportOptions;

	// public

	// markets(): Promise<Market[]>;
	// currencies(): Promise<Currency[]>;
	ticker(market: string): Promise<Ticker>;
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

	// balances(): Promise<Balance[]>;
	// balance(currency: string): Promise<Balance>;
	// depositAddress(currency: string): Promise<DepositAddress>;
	// withdraw(currency: string, quantity: BigNumber, address: string, paymentid?: string): Promise<WithdrawalConfirmation>;
	// order(uuid: string): Promise<Order>;
	orderHistory(market?: string): Promise<OrderHistory[]>;
	// withdrawalHistory(currency?: string): Promise<Transaction[]>;
	// depositHistory(currency?: string): Promise<Transaction[]>;
}

export class BittrexClient implements Bittrex {
	private transport: Transport;

	constructor(public options: TransportOptions) {
		this.transport = new Transport(options);
	}

	public async ticker(market: string): Promise<Ticker> {
		return this.transport.request(TickerData, '/public/getticker', {market: market}) as Promise<Ticker>;
	}

	public orderHistory(market?: string): Promise<OrderHistory[]> {
		return this.transport.request(OrderHistoryData, '/account/getorderhistory', {market: market}) as Promise<OrderHistory[]>;
	}
}
