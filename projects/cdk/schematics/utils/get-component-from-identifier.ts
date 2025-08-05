import {type ClassDeclaration, getImports, getNgComponents, type Node} from 'ng-morph';

export function getComponentFromIdentifier(
    identifier: Node,
): ClassDeclaration | undefined {
    const [rootImportDeclaration] = getImports(identifier.getSourceFile().getFilePath(), {
        namedImports: [identifier.getText()],
    });

    const rootComponentPath =
        rootImportDeclaration?.getModuleSpecifierSourceFile()?.getFilePath() || '';

    return getNgComponents(rootComponentPath, {name: identifier.getText()})[0];
}
