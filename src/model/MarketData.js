"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bignumber_js_1 = require("bignumber.js");
const json2typescript_1 = require("json2typescript");
const DataConverter_1 = require("./DataConverter");
let MarketData = class MarketData {
    constructor() {
        this.MarketCurrency = undefined;
        this.BaseCurrency = undefined;
        this.MarketCurrencyLong = undefined;
        this.BaseCurrencyLong = undefined;
        this.MinTradeSize = undefined;
        this.MarketName = undefined;
        this.IsActive = undefined;
        this.Created = undefined;
    }
};
tslib_1.__decorate([
    json2typescript_1.JsonProperty(),
    tslib_1.__metadata("design:type", String)
], MarketData.prototype, "MarketCurrency", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty(),
    tslib_1.__metadata("design:type", String)
], MarketData.prototype, "BaseCurrency", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty(),
    tslib_1.__metadata("design:type", String)
], MarketData.prototype, "MarketCurrencyLong", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty(),
    tslib_1.__metadata("design:type", String)
], MarketData.prototype, "BaseCurrencyLong", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty('MinTradeSize', DataConverter_1.BigNumberConverter, false),
    tslib_1.__metadata("design:type", bignumber_js_1.default)
], MarketData.prototype, "MinTradeSize", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty(),
    tslib_1.__metadata("design:type", String)
], MarketData.prototype, "MarketName", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty(),
    tslib_1.__metadata("design:type", Boolean)
], MarketData.prototype, "IsActive", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty('Created', DataConverter_1.DateConverter, false),
    tslib_1.__metadata("design:type", Date)
], MarketData.prototype, "Created", void 0);
MarketData = tslib_1.__decorate([
    json2typescript_1.JsonObject
], MarketData);
exports.MarketData = MarketData;
//# sourceMappingURL=MarketData.js.map