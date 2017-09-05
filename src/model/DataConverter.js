"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const json2typescript_1 = require("json2typescript");
const bignumber_js_1 = require("bignumber.js");
// Disable the error about 15 decimal places
// Happens during Bittrex.marketSummaries()
const BN = bignumber_js_1.default.another({ ERRORS: false });
let DateConverter = class DateConverter {
    serialize(date) {
        return date.toTimeString();
    }
    deserialize(date) {
        return date ? new Date(date) : null;
    }
};
DateConverter = tslib_1.__decorate([
    json2typescript_1.JsonConverter
], DateConverter);
exports.DateConverter = DateConverter;
let BigNumberConverter = class BigNumberConverter {
    serialize(big) {
        return new BN(big).toNumber();
    }
    deserialize(big) {
        return big ? new BN(big) : null;
    }
};
BigNumberConverter = tslib_1.__decorate([
    json2typescript_1.JsonConverter
], BigNumberConverter);
exports.BigNumberConverter = BigNumberConverter;
//# sourceMappingURL=DataConverter.js.map