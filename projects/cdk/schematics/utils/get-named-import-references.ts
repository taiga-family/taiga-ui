import {arrayFlat, getImports, Node} from 'ng-morph';

import {ALL_TS_FILES} from '../constants';

export function getNamedImportReferences(
    namedImport: string,
    moduleSpecifier: string[] | string = `**/**`,
    files = ALL_TS_FILES,
): Node[] {
    const importDeclarations = getImports(files, {
        moduleSpecifier,
        namedImports: [namedImport],
    });

    const namedImports = importDeclarations.map(
        declaration =>
            declaration
                .getNamedImports()
                .find(specifier => specifier.getName() === namedImport)
                ?.getNameNode(),
    );

    return arrayFlat(
        namedImports.map(specifier => specifier?.findReferencesAsNodes() || []),
    );
}
