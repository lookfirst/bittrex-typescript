"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bignumber_js_1 = require("bignumber.js");
const json2typescript_1 = require("json2typescript");
const DataConverter_1 = require("./DataConverter");
let WithdrawalData = class WithdrawalData {
    constructor() {
        this.PaymentUuid = undefined;
        this.Currency = undefined;
        this.Amount = undefined;
        this.Opened = undefined;
        this.Authorized = undefined;
        this.PendingPayment = undefined;
        this.TxCost = undefined;
        this.TxId = undefined;
        this.Canceled = undefined;
        this.InvalidAddress = undefined;
    }
};
tslib_1.__decorate([
    json2typescript_1.JsonProperty('PaymentUuid', undefined, true),
    tslib_1.__metadata("design:type", String)
], WithdrawalData.prototype, "PaymentUuid", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty(),
    tslib_1.__metadata("design:type", String)
], WithdrawalData.prototype, "Currency", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty('Amount', DataConverter_1.BigNumberConverter, false),
    tslib_1.__metadata("design:type", bignumber_js_1.default)
], WithdrawalData.prototype, "Amount", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty('Opened', DataConverter_1.DateConverter, false),
    tslib_1.__metadata("design:type", Date)
], WithdrawalData.prototype, "Opened", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty(),
    tslib_1.__metadata("design:type", Boolean)
], WithdrawalData.prototype, "Authorized", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty(),
    tslib_1.__metadata("design:type", Boolean)
], WithdrawalData.prototype, "PendingPayment", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty('TxCost', DataConverter_1.BigNumberConverter, false),
    tslib_1.__metadata("design:type", bignumber_js_1.default)
], WithdrawalData.prototype, "TxCost", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty(),
    tslib_1.__metadata("design:type", String)
], WithdrawalData.prototype, "TxId", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty(),
    tslib_1.__metadata("design:type", Boolean)
], WithdrawalData.prototype, "Canceled", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty(),
    tslib_1.__metadata("design:type", Boolean)
], WithdrawalData.prototype, "InvalidAddress", void 0);
WithdrawalData = tslib_1.__decorate([
    json2typescript_1.JsonObject
], WithdrawalData);
exports.WithdrawalData = WithdrawalData;
//# sourceMappingURL=WithdrawalData.js.map