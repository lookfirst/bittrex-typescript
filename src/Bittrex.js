"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
const Transport_1 = require("./Transport");
const OrderBookData_1 = require("./model/OrderBookData");
const retry_promise_typescript_1 = require("retry-promise-typescript");
class BittrexOptions {
}
exports.BittrexOptions = BittrexOptions;
class BittrexClient {
    constructor(options) {
        this.transport = new Transport_1.Transport(Object.assign({}, options, { baseUrl: BittrexClient.BASE_URL }));
    }
    // public
    async markets() {
        return this.transport.request(model_1.MarketData, '/public/getmarkets');
    }
    async currencies() {
        return this.transport.request(model_1.CurrencyData, '/public/getcurrencies');
    }
    async ticker(market) {
        return this.transport.request(model_1.TickerData, '/public/getticker', { market: market });
    }
    async marketHistory(market) {
        return this.transport.request(model_1.MarketHistoryData, '/public/getmarkethistory', { market: market });
    }
    async marketSummary(market) {
        return this.transport.request(model_1.MarketSummaryData, '/public/getmarketsummary', { market: market });
    }
    async marketSummaries() {
        return this.transport.request(model_1.MarketSummaryData, '/public/getmarketsummaries');
    }
    async orderBook(market, type) {
        const pathname = '/public/getorderbook';
        const data = { market: market, type: type };
        if (type === 'both')
            return this.transport.request(model_1.OrderBookData, pathname, data);
        else
            return this.transport.request(OrderBookData_1.OrderBookItem, pathname, data);
    }
    // market
    buyLimit(market, quantity, rate) {
        return this.transport.request(model_1.UuidData, '/market/buylimit', {
            market: market,
            quantity: quantity,
            rate: rate
        });
    }
    sellLimit(market, quantity, rate) {
        return this.transport.request(model_1.UuidData, '/market/selllimit', {
            market: market,
            quantity: quantity,
            rate: rate
        });
    }
    cancel(uuid) {
        return this.transport.request(null, '/market/cancel', { uuid: uuid });
    }
    async openOrders(market) {
        return this.transport.request(model_1.OrderData, '/market/getopenorders', { market: market });
    }
    // account
    async balance(currency) {
        return this.transport.request(model_1.BalanceData, '/account/getbalance', { currency: currency });
    }
    async balances() {
        return this.transport.request(model_1.BalanceData, '/account/getbalances');
    }
    async order(uuid) {
        return this.transport.request(model_1.OrderData, '/account/getorder', { uuid: uuid });
    }
    async orders(market) {
        return this.transport.request(model_1.OrderData, '/account/getorderhistory', { market: market });
    }
    async depositAddress(currency, retryOptions) {
        return new retry_promise_typescript_1.RetryPromise(retryOptions).retry(this.transport.request(model_1.DepositAddressData, '/account/getdepositaddress', { currency: currency }));
    }
    async withdraw(currency, quantity, address, paymentId) {
        return this.transport.request(model_1.UuidData, '/account/withdraw', { currency: currency, quantity: quantity, address: address, paymentid: paymentId });
    }
    withdrawalHistory(currency) {
        return this.transport.request(model_1.WithdrawalData, '/account/getwithdrawalhistory', { currency: currency });
    }
    depositHistory(currency) {
        return this.transport.request(model_1.DepositData, '/account/getdeposithistory', { currency: currency });
    }
}
BittrexClient.BASE_URL = 'https://bittrex.com/api/v1.1';
exports.BittrexClient = BittrexClient;
//# sourceMappingURL=Bittrex.js.map