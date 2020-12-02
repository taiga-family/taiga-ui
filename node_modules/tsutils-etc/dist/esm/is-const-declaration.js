import * as tsutils from "tsutils";
export function isConstDeclaration(declaration) {
    let variableDeclarationList = null;
    if (tsutils.isVariableDeclaration(declaration)) {
        if (tsutils.isVariableDeclarationList(declaration.parent)) {
            variableDeclarationList = declaration.parent;
        }
    }
    else if (tsutils.isBindingElement(declaration)) {
        let parent = declaration.parent;
        while (tsutils.isBindingPattern(parent) ||
            tsutils.isVariableDeclaration(parent)) {
            parent = parent.parent;
        }
        if (tsutils.isVariableDeclarationList(parent)) {
            variableDeclarationList = parent;
        }
    }
    if (variableDeclarationList) {
        return (tsutils.getVariableDeclarationKind(variableDeclarationList) ===
            tsutils.VariableDeclarationKind.Const);
    }
    return false;
}
//# sourceMappingURL=is-const-declaration.js.map