import {ClassDeclaration, getImports, Node} from 'ng-morph';

import {getNgComponents} from './angular/ng-component';

export function getComponentFromIdentifier(
    identifier: Node,
): ClassDeclaration | undefined {
    const rootImportDeclaration = getImports(identifier.getSourceFile().getFilePath(), {
        namedImports: [identifier.getText()],
    })[0];

    const rootComponentPath =
        rootImportDeclaration.getModuleSpecifierSourceFile()?.getFilePath() || ``;

    return getNgComponents(rootComponentPath, {
        name: identifier.getText(),
    })[0];
}
