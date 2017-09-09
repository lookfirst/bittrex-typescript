"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("../");
const Config_1 = require("./Config");
const bittrex = new _1.BittrexClient(Config_1.Config.bittrex.readonly);
bittrex.marketSummaries().then((summaries) => {
    console.log(summaries);
    bittrex.marketSummary('BTC-NEO').then((summary) => {
        console.log(summary);
        console.log(summary.invert());
    });
});
//# sourceMappingURL=MarketSummaryTest.js.map