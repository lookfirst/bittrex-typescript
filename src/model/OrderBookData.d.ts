import BigNumber from 'bignumber.js';
export declare class OrderBookItem {
    Quantity: BigNumber;
    Rate: BigNumber;
}
export declare class OrderBookData {
    buy: OrderBookItem[];
    sell: OrderBookItem[];
}
