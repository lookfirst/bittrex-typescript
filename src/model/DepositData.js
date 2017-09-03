"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const json2typescript_1 = require("json2typescript");
const DataConverter_1 = require("./DataConverter");
let DepositData = class DepositData {
    constructor() {
        this.Id = undefined;
        this.Currency = undefined;
        this.Confirmations = undefined;
        this.LastUpdated = undefined;
        this.TxId = undefined;
        this.CryptoAddress = undefined;
    }
};
tslib_1.__decorate([
    json2typescript_1.JsonProperty('Id'),
    tslib_1.__metadata("design:type", Number)
], DepositData.prototype, "Id", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty(),
    tslib_1.__metadata("design:type", String)
], DepositData.prototype, "Currency", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty(),
    tslib_1.__metadata("design:type", Number)
], DepositData.prototype, "Confirmations", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty('LastUpdated', DataConverter_1.DateConverter, false),
    tslib_1.__metadata("design:type", Date)
], DepositData.prototype, "LastUpdated", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty(),
    tslib_1.__metadata("design:type", String)
], DepositData.prototype, "TxId", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty(),
    tslib_1.__metadata("design:type", String)
], DepositData.prototype, "CryptoAddress", void 0);
DepositData = tslib_1.__decorate([
    json2typescript_1.JsonObject
], DepositData);
exports.DepositData = DepositData;
//# sourceMappingURL=DepositData.js.map