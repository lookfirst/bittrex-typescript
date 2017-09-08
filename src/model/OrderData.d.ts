import BigNumber from 'bignumber.js';
export declare class OrderData {
    Uuid: string;
    OrderUuid: string;
    Exchange: string;
    TimeStamp: Date;
    OrderType: string;
    /** /account/getorder returns Type: */
    Type: string;
    Limit: BigNumber;
    Quantity: BigNumber;
    QuantityRemaining: BigNumber;
    Commission: BigNumber;
    CommissionPaid: BigNumber;
    Price: BigNumber;
    PricePerUnit: BigNumber;
    IsConditional: boolean;
    Condition: string;
    ConditionTarget: string;
    ImmediateOrCancel: boolean;
    Opened: Date;
    Closed: Date;
    CancelInitiated: boolean;
}
