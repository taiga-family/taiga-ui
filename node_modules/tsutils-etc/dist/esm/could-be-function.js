import * as ts from "typescript";
import { couldBeType } from "./could-be-type";
export function couldBeFunction(type) {
    return (type.getCallSignatures().length > 0 ||
        couldBeType(type, "Function") ||
        couldBeType(type, "ArrowFunction") ||
        couldBeType(type, ts.InternalSymbolName.Function));
}
//# sourceMappingURL=could-be-function.js.map