"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("../");
const Config_1 = require("./Config");
const bittrex = new _1.BittrexClient(Config_1.Config.bittrex.readonly);
let start = Date.now();
bittrex.orders().then((orders) => {
    console.log(orders);
    console.log(`${Date.now() - start}ms`);
}, (error) => {
    console.log(error);
});
start = Date.now();
bittrex.openOrders('BTC-NEO').then((orders) => {
    console.log(orders);
    console.log(`${Date.now() - start}ms`);
}, (error) => {
    console.log(error);
});
//# sourceMappingURL=OrderTest.js.map