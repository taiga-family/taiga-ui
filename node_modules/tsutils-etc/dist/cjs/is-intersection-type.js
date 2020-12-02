"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIntersectionType = void 0;
const tsutils = require("tsutils");
const ts = require("typescript");
function isIntersectionType(type) {
    return tsutils.isTypeFlagSet(type, ts.TypeFlags.Intersection);
}
exports.isIntersectionType = isIntersectionType;
//# sourceMappingURL=is-intersection-type.js.map