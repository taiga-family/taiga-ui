import * as tsutils from "tsutils";
import * as ts from "typescript";
export function isIntersectionType(type) {
    return tsutils.isTypeFlagSet(type, ts.TypeFlags.Intersection);
}
//# sourceMappingURL=is-intersection-type.js.map