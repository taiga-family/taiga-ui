import * as tsutils from "tsutils";
export function isWithinParameterDeclaration(node) {
    if (tsutils.isParameterDeclaration(node)) {
        return true;
    }
    return (tsutils.isBindingElement(node) &&
        tsutils.isBindingPattern(node.parent) &&
        tsutils.isParameterDeclaration(node.parent.parent));
}
//# sourceMappingURL=is-within-parameter-declaration.js.map