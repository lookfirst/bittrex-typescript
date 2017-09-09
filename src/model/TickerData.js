"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bignumber_js_1 = require("bignumber.js");
const json2typescript_1 = require("json2typescript");
const DataConverter_1 = require("./DataConverter");
let TickerData = TickerData_1 = class TickerData {
    constructor() {
        this.Bid = undefined;
        this.Ask = undefined;
        this.Last = undefined;
    }
    invert() {
        return Object.assign(new TickerData_1(), {
            Bid: TickerData_1.ONE.dividedBy(this.Bid),
            Ask: TickerData_1.ONE.dividedBy(this.Ask),
            Last: TickerData_1.ONE.dividedBy(this.Last)
        });
    }
};
TickerData.ONE = new bignumber_js_1.default(1);
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
TickerData = TickerData_1 = tslib_1.__decorate([
    json2typescript_1.JsonObject
], TickerData);
exports.TickerData = TickerData;
var TickerData_1;
//# sourceMappingURL=TickerData.js.map