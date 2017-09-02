import BigNumber from 'bignumber.js';
export interface Ticker {
    Bid: BigNumber;
    Ask: BigNumber;
    Last: BigNumber;
}
export declare class TickerData implements Ticker {
    Bid: BigNumber;
    Ask: BigNumber;
    Last: BigNumber;
}
