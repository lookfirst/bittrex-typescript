"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("../");
const Config_1 = require("./Config");
const bittrex = new _1.BittrexClient(Config_1.Config.bittrex.readonly);
bittrex.orderBook('BTC-LTC', 'buy').then((orderBook) => {
    console.log(orderBook);
}, (error) => {
    console.log(error);
});
bittrex.orderBook('BTC-LTC', 'both').then((orderBook) => {
    console.log(orderBook);
}, (error) => {
    console.log(error);
});
//# sourceMappingURL=OrderBookTest.js.map