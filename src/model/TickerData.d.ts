import BigNumber from 'bignumber.js';
export declare class TickerData {
    private static ONE;
    Bid: BigNumber;
    Ask: BigNumber;
    Last: BigNumber;
    invert(): TickerData;
}
