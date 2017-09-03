"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("../");
const Config_1 = require("./Config");
const bittrex = new _1.BittrexClient(Config_1.Config.bittrex.readonly);
bittrex.balances().then((balances) => {
    console.log(balances);
}, (error) => {
    console.log(error);
});
bittrex.balance('BTC').then((balance) => {
    console.log(balance);
}, (error) => {
    console.log(error);
});
//# sourceMappingURL=BalanceTest.js.map