import * as tsutils from "tsutils";
import * as ts from "typescript";
export function isAny(type) {
    return tsutils.isTypeFlagSet(type, ts.TypeFlags.Any);
}
//# sourceMappingURL=is-any.js.map