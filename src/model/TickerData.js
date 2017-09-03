"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bignumber_js_1 = require("bignumber.js");
const json2typescript_1 = require("json2typescript");
const DataConverter_1 = require("./DataConverter");
let TickerData = class TickerData {
    constructor() {
        this.Bid = undefined;
        this.Ask = undefined;
        this.Last = undefined;
    }
};
tslib_1.__decorate([
    json2typescript_1.JsonProperty('Bid', DataConverter_1.BigNumberConverter, false),
    tslib_1.__metadata("design:type", bignumber_js_1.default)
], TickerData.prototype, "Bid", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty('Ask', DataConverter_1.BigNumberConverter, false),
    tslib_1.__metadata("design:type", bignumber_js_1.default)
], TickerData.prototype, "Ask", void 0);
tslib_1.__decorate([
    json2typescript_1.JsonProperty('Last', DataConverter_1.BigNumberConverter, false),
    tslib_1.__metadata("design:type", bignumber_js_1.default)
], TickerData.prototype, "Last", void 0);
TickerData = tslib_1.__decorate([
    json2typescript_1.JsonObject
], TickerData);
exports.TickerData = TickerData;
//# sourceMappingURL=TickerData.js.map