"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bignumber_js_1 = require("bignumber.js");
const json2typescript_1 = require("json2typescript");
const DataConverter_1 = require("./DataConverter");
let OrderBookItemConverter = class OrderBookItemConverter {
    constructor() {
        this.jsonConvert = new json2typescript_1.JsonConvert();
    }
    serialize(obi) {
        return obi;
    }
    deserialize(objects) {
        return objects.map((obj) => {
            return this.jsonConvert.deserialize(obj, OrderBookItem);
        });
    }
};
OrderBookItemConverter = tslib_1.__decorate([
    json2typescript_1.JsonConverter
], OrderBookItemConverter);
let OrderBookItem = class OrderBookItem {
    constructor() {
        this.Quantity = undefined;
        this.Rate = undefined;
    }
};
tslib_1.__decorate([
    json2typescript_1.JsonProperty('Quantity', DataConverter_1.BigNumberConverter, false),
    tslib_1.__metadata("design:type", bignumber_js_1.default)
], OrderBookItem.prototype, "Quantity", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty('Rate', DataConverter_1.BigNumberConverter, false),
    tslib_1.__metadata("design:type", bignumber_js_1.default)
], OrderBookItem.prototype, "Rate", void 0);
OrderBookItem = tslib_1.__decorate([
    json2typescript_1.JsonObject
], OrderBookItem);
exports.OrderBookItem = OrderBookItem;
let OrderBookData = class OrderBookData {
    constructor() {
        this.buy = undefined;
        this.sell = undefined;
    }
};
tslib_1.__decorate([
    json2typescript_1.JsonProperty('buy', OrderBookItemConverter, false),
    tslib_1.__metadata("design:type", Array)
], OrderBookData.prototype, "buy", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty('sell', OrderBookItemConverter, false),
    tslib_1.__metadata("design:type", Array)
], OrderBookData.prototype, "sell", void 0);
OrderBookData = tslib_1.__decorate([
    json2typescript_1.JsonObject
], OrderBookData);
exports.OrderBookData = OrderBookData;
//# sourceMappingURL=OrderBookData.js.map