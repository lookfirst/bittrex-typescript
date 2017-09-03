"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const json2typescript_1 = require("json2typescript");
let DepositAddressData = class DepositAddressData {
    constructor() {
        this.Currency = undefined;
        this.Address = undefined;
    }
};
tslib_1.__decorate([
    json2typescript_1.JsonProperty(),
    tslib_1.__metadata("design:type", String)
], DepositAddressData.prototype, "Currency", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty(),
    tslib_1.__metadata("design:type", String)
], DepositAddressData.prototype, "Address", void 0);
DepositAddressData = tslib_1.__decorate([
    json2typescript_1.JsonObject
], DepositAddressData);
exports.DepositAddressData = DepositAddressData;
//# sourceMappingURL=DepositAddressData.js.map