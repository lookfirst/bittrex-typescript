import BigNumber from 'bignumber.js';

export declare class BalanceData {
	Currency: string;
	Balance: BigNumber;
	Available: BigNumber;
	Pending: BigNumber;
	CryptoAddress: string;
	Requested: boolean;
	Uuid: string;
}
