"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bignumber_js_1 = require("bignumber.js");
const json2typescript_1 = require("json2typescript");
const DataConverter_1 = require("./DataConverter");
let OrderData = class OrderData {
    constructor() {
        this.Uuid = undefined; // fd97d393-e9b9-4dd1-9dbf-f288fc72a185
        this.OrderUuid = undefined; // fd97d393-e9b9-4dd1-9dbf-f288fc72a185
        this.Exchange = undefined; // BTC-LTC
        this.TimeStamp = undefined; // 2014-07-09T04:01:00.667
        this.OrderType = undefined; // LIMIT_BUY
        /** /account/getorder returns Type: */
        this.Type = undefined; // LIMIT_BUY
        this.Limit = undefined; // 0.00000001
        this.Quantity = undefined; // 100000.00000000
        this.QuantityRemaining = undefined; // 100000.00000000
        this.Commission = undefined; // 0.00000000
        this.CommissionPaid = undefined; // 0.00000000
        this.Price = undefined; // 0.00000000
        this.PricePerUnit = undefined; // 0.00000000
        this.IsConditional = undefined; // false
        this.Condition = undefined; // null
        this.ConditionTarget = undefined; // null
        this.ImmediateOrCancel = undefined; // false
        this.Opened = undefined;
        this.Closed = undefined;
        this.CancelInitiated = undefined;
    }
};
tslib_1.__decorate([
    json2typescript_1.JsonProperty('Uuid', undefined, true),
    tslib_1.__metadata("design:type", String)
], OrderData.prototype, "Uuid", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty(),
    tslib_1.__metadata("design:type", String)
], OrderData.prototype, "OrderUuid", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty(),
    tslib_1.__metadata("design:type", String)
], OrderData.prototype, "Exchange", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty('TimeStamp', DataConverter_1.DateConverter, true),
    tslib_1.__metadata("design:type", Date)
], OrderData.prototype, "TimeStamp", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty('OrderType', undefined, true),
    tslib_1.__metadata("design:type", String)
], OrderData.prototype, "OrderType", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty('Type', undefined, true),
    tslib_1.__metadata("design:type", String)
], OrderData.prototype, "Type", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty('Limit', DataConverter_1.BigNumberConverter, true),
    tslib_1.__metadata("design:type", bignumber_js_1.default)
], OrderData.prototype, "Limit", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty('Quantity', DataConverter_1.BigNumberConverter, false),
    tslib_1.__metadata("design:type", bignumber_js_1.default)
], OrderData.prototype, "Quantity", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty('QuantityRemaining', DataConverter_1.BigNumberConverter, false),
    tslib_1.__metadata("design:type", bignumber_js_1.default)
], OrderData.prototype, "QuantityRemaining", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty('Commission', DataConverter_1.BigNumberConverter, true),
    tslib_1.__metadata("design:type", bignumber_js_1.default)
], OrderData.prototype, "Commission", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty('CommissionPaid', DataConverter_1.BigNumberConverter, true),
    tslib_1.__metadata("design:type", bignumber_js_1.default)
], OrderData.prototype, "CommissionPaid", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty('Price', DataConverter_1.BigNumberConverter, false),
    tslib_1.__metadata("design:type", bignumber_js_1.default)
], OrderData.prototype, "Price", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty('PricePerUnit', DataConverter_1.BigNumberConverter, false),
    tslib_1.__metadata("design:type", bignumber_js_1.default)
], OrderData.prototype, "PricePerUnit", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty(),
    tslib_1.__metadata("design:type", Boolean)
], OrderData.prototype, "IsConditional", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty(),
    tslib_1.__metadata("design:type", String)
], OrderData.prototype, "Condition", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty(),
    tslib_1.__metadata("design:type", String)
], OrderData.prototype, "ConditionTarget", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty(),
    tslib_1.__metadata("design:type", Boolean)
], OrderData.prototype, "ImmediateOrCancel", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty('Opened', DataConverter_1.DateConverter, true),
    tslib_1.__metadata("design:type", Date)
], OrderData.prototype, "Opened", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty('Closed', DataConverter_1.DateConverter, true),
    tslib_1.__metadata("design:type", Date)
], OrderData.prototype, "Closed", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty('CancelInitiated', undefined, true),
    tslib_1.__metadata("design:type", Boolean)
], OrderData.prototype, "CancelInitiated", void 0);
OrderData = tslib_1.__decorate([
    json2typescript_1.JsonObject
], OrderData);
exports.OrderData = OrderData;
//# sourceMappingURL=OrderData.js.map