"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isReferenceType = void 0;
const tsutils = require("tsutils");
const ts = require("typescript");
function isReferenceType(type) {
    return (tsutils.isTypeFlagSet(type, ts.TypeFlags.Object) &&
        tsutils.isObjectFlagSet(type, ts.ObjectFlags.Reference));
}
exports.isReferenceType = isReferenceType;
//# sourceMappingURL=is-reference-type.js.map