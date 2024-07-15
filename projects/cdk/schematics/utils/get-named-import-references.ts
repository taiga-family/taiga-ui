import type {Node} from 'ng-morph';
import {arrayFlat, getImports} from 'ng-morph';

import {ALL_TS_FILES} from '../constants';

export function getNamedImportReferences(
    namedImport: string,
    moduleSpecifier: string[] | string = ['**/**'],
    files = ALL_TS_FILES,
): Node[] {
    const importDeclarations = getImports(files, {
        namedImports: [namedImport],
        moduleSpecifier: Array.isArray(moduleSpecifier)
            ? moduleSpecifier
            : [moduleSpecifier, `${moduleSpecifier}/**`],
    });

    const namedImports = importDeclarations.map((declaration) =>
        declaration
            .getNamedImports()
            .find((specifier) => specifier.getName() === namedImport)
            ?.getNameNode(),
    );

    return arrayFlat(
        namedImports.map(
            (specifier) =>
                specifier?.findReferencesAsNodes().filter(
                    /**
                     * Otherwise, each `findReferencesAsNodes` will return references across THE WHOLE project.
                     * It will cause a lot of duplicates in the result and significantly slow down the process.
                     */
                    (ref) =>
                        ref.getSourceFile().getFilePath() ===
                        specifier?.getSourceFile().getFilePath(),
                ) || [],
        ),
    );
}
