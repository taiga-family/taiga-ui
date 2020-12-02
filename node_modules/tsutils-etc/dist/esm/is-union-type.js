import * as tsutils from "tsutils";
import * as ts from "typescript";
export function isUnionType(type) {
    return tsutils.isTypeFlagSet(type, ts.TypeFlags.Union);
}
//# sourceMappingURL=is-union-type.js.map