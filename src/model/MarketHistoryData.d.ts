import BigNumber from 'bignumber.js';
export declare class MarketHistoryData {
    Id: number;
    TimeStamp: Date;
    Quantity: BigNumber;
    Price: BigNumber;
    Total: BigNumber;
    OrderType: string;
}
