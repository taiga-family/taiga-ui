"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findDeclaration = void 0;
function findDeclaration(node, typeChecker) {
    const symbol = typeChecker.getSymbolAtLocation(node);
    if (!symbol) {
        return undefined;
    }
    const declarations = symbol.getDeclarations();
    if (!declarations || declarations.length === 0) {
        return undefined;
    }
    const [declaration] = declarations;
    return declaration;
}
exports.findDeclaration = findDeclaration;
//# sourceMappingURL=find-declaration.js.map