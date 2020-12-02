"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAny = void 0;
const tsutils = require("tsutils");
const ts = require("typescript");
function isAny(type) {
    return tsutils.isTypeFlagSet(type, ts.TypeFlags.Any);
}
exports.isAny = isAny;
//# sourceMappingURL=is-any.js.map