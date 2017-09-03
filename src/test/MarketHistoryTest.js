"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("../");
const Config_1 = require("./Config");
const bittrex = new _1.BittrexClient(Config_1.Config.bittrex.readonly);
bittrex.marketHistory('BTC-NEO').then((histories) => {
    console.log(histories);
}, (error) => {
    console.log(error);
});
//# sourceMappingURL=MarketHistoryTest.js.map