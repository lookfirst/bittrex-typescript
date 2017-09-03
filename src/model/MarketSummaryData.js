"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bignumber_js_1 = require("bignumber.js");
const json2typescript_1 = require("json2typescript");
const DataConverter_1 = require("./DataConverter");
let MarketSummaryData = class MarketSummaryData {
    constructor() {
        this.MarketName = undefined;
        this.High = undefined;
        this.Low = undefined;
        this.Volume = undefined;
        this.Last = undefined;
        this.BaseVolume = undefined;
        this.TimeStamp = undefined;
        this.Bid = undefined;
        this.Ask = undefined;
        this.OpenBuyOrders = undefined;
        this.OpenSellOrders = undefined;
        this.PrevDay = undefined;
        this.Created = undefined;
        this.DisplayMarketName = undefined;
    }
};
tslib_1.__decorate([
    json2typescript_1.JsonProperty(),
    tslib_1.__metadata("design:type", String)
], MarketSummaryData.prototype, "MarketName", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty('High', DataConverter_1.BigNumberConverter, false),
    tslib_1.__metadata("design:type", bignumber_js_1.default)
], MarketSummaryData.prototype, "High", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty('Low', DataConverter_1.BigNumberConverter, false),
    tslib_1.__metadata("design:type", bignumber_js_1.default)
], MarketSummaryData.prototype, "Low", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty('Volume', DataConverter_1.BigNumberConverter, false),
    tslib_1.__metadata("design:type", bignumber_js_1.default)
], MarketSummaryData.prototype, "Volume", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty('Last', DataConverter_1.BigNumberConverter, false),
    tslib_1.__metadata("design:type", bignumber_js_1.default)
], MarketSummaryData.prototype, "Last", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty('BaseVolume', DataConverter_1.BigNumberConverter, false),
    tslib_1.__metadata("design:type", bignumber_js_1.default)
], MarketSummaryData.prototype, "BaseVolume", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty('TimeStamp', DataConverter_1.DateConverter, false),
    tslib_1.__metadata("design:type", Date)
], MarketSummaryData.prototype, "TimeStamp", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty('Bid', DataConverter_1.BigNumberConverter, false),
    tslib_1.__metadata("design:type", bignumber_js_1.default)
], MarketSummaryData.prototype, "Bid", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty('Ask', DataConverter_1.BigNumberConverter, false),
    tslib_1.__metadata("design:type", bignumber_js_1.default)
], MarketSummaryData.prototype, "Ask", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty(),
    tslib_1.__metadata("design:type", Number)
], MarketSummaryData.prototype, "OpenBuyOrders", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty(),
    tslib_1.__metadata("design:type", Number)
], MarketSummaryData.prototype, "OpenSellOrders", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty('PrevDay', DataConverter_1.BigNumberConverter, false),
    tslib_1.__metadata("design:type", bignumber_js_1.default)
], MarketSummaryData.prototype, "PrevDay", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty('Created', DataConverter_1.DateConverter, false),
    tslib_1.__metadata("design:type", Date)
], MarketSummaryData.prototype, "Created", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty('DisplayMarketName', undefined, true),
    tslib_1.__metadata("design:type", String)
], MarketSummaryData.prototype, "DisplayMarketName", void 0);
MarketSummaryData = tslib_1.__decorate([
    json2typescript_1.JsonObject
], MarketSummaryData);
exports.MarketSummaryData = MarketSummaryData;
//# sourceMappingURL=MarketSummaryData.js.map