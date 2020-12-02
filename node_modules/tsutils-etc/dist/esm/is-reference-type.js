import * as tsutils from "tsutils";
import * as ts from "typescript";
export function isReferenceType(type) {
    return (tsutils.isTypeFlagSet(type, ts.TypeFlags.Object) &&
        tsutils.isObjectFlagSet(type, ts.ObjectFlags.Reference));
}
//# sourceMappingURL=is-reference-type.js.map