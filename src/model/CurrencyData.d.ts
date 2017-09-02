import BigNumber from 'bignumber.js';

export declare class CurrencyData {
	Currency: string;
	CurrencyLong: string;
	MinConfirmation: number;
	TxFee: BigNumber;
	IsActive: boolean;
	CoinType: string;
	BaseAddress: string;
}
