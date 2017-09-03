import BigNumber from 'bignumber.js';
export declare class WithdrawalData {
    PaymentUuid: string;
    Currency: string;
    Amount: BigNumber;
    Opened: Date;
    Authorized: boolean;
    PendingPayment: boolean;
    TxCost: BigNumber;
    TxId: string;
    Canceled: boolean;
    InvalidAddress: boolean;
}
