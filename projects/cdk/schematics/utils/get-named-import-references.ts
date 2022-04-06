import {arrayFlat, getImports, Node} from 'ng-morph';

export function getNamedImportReferences(
    namedImport: string,
    moduleSpecifier: string | string[] = '**/**',
): Node[] {
    const importDeclarations = getImports('**/**', {
        namedImports: [namedImport],
        moduleSpecifier: moduleSpecifier,
    });

    const namedImports = importDeclarations.map(declaration =>
        declaration
            .getNamedImports()
            .find(specifier => specifier.getName() === namedImport)
            ?.getNameNode(),
    );

    return arrayFlat(
        namedImports.map(specifier => specifier?.findReferencesAsNodes() || []),
    );
}
