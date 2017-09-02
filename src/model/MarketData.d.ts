import BigNumber from 'bignumber.js';

export declare class MarketData {
	MarketCurrency: string;
	BaseCurrency: string;
	MarketCurrencyLong: string;
	BaseCurrencyLong: string;
	MinTradeSize: BigNumber;
	MarketName: string;
	IsActive: boolean;
	Created: Date;
}
