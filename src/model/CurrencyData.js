"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bignumber_js_1 = require("bignumber.js");
const json2typescript_1 = require("json2typescript");
const DataConverter_1 = require("./DataConverter");
let CurrencyData = class CurrencyData {
    constructor() {
        this.Currency = undefined;
        this.CurrencyLong = undefined;
        this.MinConfirmation = undefined;
        this.TxFee = undefined;
        this.IsActive = undefined;
        this.CoinType = undefined;
        this.BaseAddress = undefined;
    }
};
tslib_1.__decorate([
    json2typescript_1.JsonProperty(),
    tslib_1.__metadata("design:type", String)
], CurrencyData.prototype, "Currency", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty(),
    tslib_1.__metadata("design:type", String)
], CurrencyData.prototype, "CurrencyLong", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty(),
    tslib_1.__metadata("design:type", Number)
], CurrencyData.prototype, "MinConfirmation", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty('TxFee', DataConverter_1.BigNumberConverter, false),
    tslib_1.__metadata("design:type", bignumber_js_1.default)
], CurrencyData.prototype, "TxFee", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty(),
    tslib_1.__metadata("design:type", Boolean)
], CurrencyData.prototype, "IsActive", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty(),
    tslib_1.__metadata("design:type", String)
], CurrencyData.prototype, "CoinType", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty(),
    tslib_1.__metadata("design:type", String)
], CurrencyData.prototype, "BaseAddress", void 0);
CurrencyData = tslib_1.__decorate([
    json2typescript_1.JsonObject
], CurrencyData);
exports.CurrencyData = CurrencyData;
//# sourceMappingURL=CurrencyData.js.map