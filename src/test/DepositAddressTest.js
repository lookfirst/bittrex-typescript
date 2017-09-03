"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("../");
const Config_1 = require("./Config");
const bittrex = new _1.BittrexClient(Config_1.Config.bittrex.readonly);
bittrex.depositAddress('BTC', { log: true, retries: 5 }).then((address) => {
    console.log(address);
}, (error) => {
    console.log(error);
});
bittrex.depositAddress('alsdkjf', { log: true, retries: 2 }).then((address) => {
    console.log(address);
}, (error) => {
    console.log(error);
});
//# sourceMappingURL=DepositAddressTest.js.map