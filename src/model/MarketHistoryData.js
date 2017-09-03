"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bignumber_js_1 = require("bignumber.js");
const json2typescript_1 = require("json2typescript");
const DataConverter_1 = require("./DataConverter");
let MarketHistoryData = class MarketHistoryData {
    constructor() {
        this.Id = undefined;
        this.TimeStamp = undefined;
        this.Quantity = undefined;
        this.Price = undefined;
        this.Total = undefined;
        this.OrderType = undefined;
    }
};
tslib_1.__decorate([
    json2typescript_1.JsonProperty(),
    tslib_1.__metadata("design:type", Number)
], MarketHistoryData.prototype, "Id", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty('TimeStamp', DataConverter_1.DateConverter, false),
    tslib_1.__metadata("design:type", Date)
], MarketHistoryData.prototype, "TimeStamp", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty('Quantity', DataConverter_1.BigNumberConverter, false),
    tslib_1.__metadata("design:type", bignumber_js_1.default)
], MarketHistoryData.prototype, "Quantity", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty('Price', DataConverter_1.BigNumberConverter, false),
    tslib_1.__metadata("design:type", bignumber_js_1.default)
], MarketHistoryData.prototype, "Price", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty('Total', DataConverter_1.BigNumberConverter, false),
    tslib_1.__metadata("design:type", bignumber_js_1.default)
], MarketHistoryData.prototype, "Total", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty(),
    tslib_1.__metadata("design:type", String)
], MarketHistoryData.prototype, "OrderType", void 0);
MarketHistoryData = tslib_1.__decorate([
    json2typescript_1.JsonObject
], MarketHistoryData);
exports.MarketHistoryData = MarketHistoryData;
//# sourceMappingURL=MarketHistoryData.js.map