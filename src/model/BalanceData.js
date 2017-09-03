"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bignumber_js_1 = require("bignumber.js");
const json2typescript_1 = require("json2typescript");
const DataConverter_1 = require("./DataConverter");
let BalanceData = class BalanceData {
    constructor() {
        this.Currency = undefined;
        this.Balance = undefined;
        this.Available = undefined;
        this.Pending = undefined;
        this.CryptoAddress = undefined;
        this.Requested = undefined;
        this.Uuid = undefined;
    }
};
tslib_1.__decorate([
    json2typescript_1.JsonProperty(),
    tslib_1.__metadata("design:type", String)
], BalanceData.prototype, "Currency", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty('Balance', DataConverter_1.BigNumberConverter, false),
    tslib_1.__metadata("design:type", bignumber_js_1.default)
], BalanceData.prototype, "Balance", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty('Available', DataConverter_1.BigNumberConverter, false),
    tslib_1.__metadata("design:type", bignumber_js_1.default)
], BalanceData.prototype, "Available", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty('Pending', DataConverter_1.BigNumberConverter, false),
    tslib_1.__metadata("design:type", bignumber_js_1.default)
], BalanceData.prototype, "Pending", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty(),
    tslib_1.__metadata("design:type", String)
], BalanceData.prototype, "CryptoAddress", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty('Requested', undefined, true),
    tslib_1.__metadata("design:type", Boolean)
], BalanceData.prototype, "Requested", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty('Uuid', undefined, true),
    tslib_1.__metadata("design:type", String)
], BalanceData.prototype, "Uuid", void 0);
BalanceData = tslib_1.__decorate([
    json2typescript_1.JsonObject
], BalanceData);
exports.BalanceData = BalanceData;
//# sourceMappingURL=BalanceData.js.map