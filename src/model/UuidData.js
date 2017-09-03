"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const json2typescript_1 = require("json2typescript");
let UuidData = class UuidData {
    constructor() {
        this.uuid = undefined;
    }
};
tslib_1.__decorate([
    json2typescript_1.JsonProperty(),
    tslib_1.__metadata("design:type", String)
], UuidData.prototype, "uuid", void 0);
UuidData = tslib_1.__decorate([
    json2typescript_1.JsonObject
], UuidData);
exports.UuidData = UuidData;
//# sourceMappingURL=UuidData.js.map