export function findDeclaration(node, typeChecker) {
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
//# sourceMappingURL=find-declaration.js.map