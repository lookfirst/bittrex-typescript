import BigNumber from 'bignumber.js';
export interface OrderHistory {
    OrderUuid: string;
    Exchange: string;
    TimeStamp: Date;
    OrderType: string;
    Limit: BigNumber;
    Quantity: BigNumber;
    QuantityRemaining: BigNumber;
    Commission: BigNumber;
    Price: BigNumber;
    PricePerUnit: BigNumber;
    IsConditional: boolean;
    Condition: null;
    ConditionTarget: null;
    ImmediateOrCancel: boolean;
}
export declare class OrderHistoryData implements OrderHistory {
    OrderUuid: string;
    Exchange: string;
    TimeStamp: Date;
    OrderType: string;
    Limit: BigNumber;
    Quantity: BigNumber;
    QuantityRemaining: BigNumber;
    Commission: BigNumber;
    Price: BigNumber;
    PricePerUnit: BigNumber;
    IsConditional: boolean;
    Condition: null;
    ConditionTarget: null;
    ImmediateOrCancel: boolean;
}
