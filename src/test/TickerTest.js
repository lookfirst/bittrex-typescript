"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("../");
const Config_1 = require("./Config");
const bittrex = new _1.BittrexClient(Config_1.Config.bittrex.readonly);
bittrex.ticker('BTC-NEO').then((ticker) => {
    console.log(ticker);
}, (error) => {
    console.log(error);
});
//# sourceMappingURL=TickerTest.js.map