import type {ClassDeclaration, Node} from '@taiga-ui/morph';
import {getImports, getNgComponents} from '@taiga-ui/morph';

export function getComponentFromIdentifier(
    identifier: Node,
): ClassDeclaration | undefined {
    const rootImportDeclaration = getImports(identifier.getSourceFile().getFilePath(), {
        namedImports: [identifier.getText()],
    })[0];

    const rootComponentPath =
        rootImportDeclaration.getModuleSpecifierSourceFile()?.getFilePath() || '';

    return getNgComponents(rootComponentPath, {name: identifier.getText()})[0];
}
