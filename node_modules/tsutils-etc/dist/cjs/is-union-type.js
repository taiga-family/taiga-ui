"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUnionType = void 0;
const tsutils = require("tsutils");
const ts = require("typescript");
function isUnionType(type) {
    return tsutils.isTypeFlagSet(type, ts.TypeFlags.Union);
}
exports.isUnionType = isUnionType;
//# sourceMappingURL=is-union-type.js.map