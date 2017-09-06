import BigNumber from 'bignumber.js';
export declare class MarketSummaryData {
    DisplayMarketName: string;
    MarketName: string;
    High: BigNumber;
    Low: BigNumber;
    Volume: BigNumber;
    Last: BigNumber;
    BaseVolume: BigNumber;
    TimeStamp: Date;
    Bid: BigNumber;
    Ask: BigNumber;
    OpenBuyOrders: number;
    OpenSellOrders: number;
    PrevDay: BigNumber;
    Created: Date;
}
