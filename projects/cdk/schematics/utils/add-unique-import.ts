import {addImports, editImports, getImports} from 'ng-morph';

export function addUniqueImport(
    filePath: string,
    namedImport: string,
    moduleSpecifier: string,
): void {
    const existingNamedImport = getImports(filePath, {
        namedImports: namedImport,
        moduleSpecifier,
    });

    if (existingNamedImport.length) {
        return;
    }

    const existingDeclaration = getImports(filePath, {
        moduleSpecifier,
    });

    if (existingDeclaration.length) {
        const modules = existingDeclaration[0]
            .getNamedImports()
            .map(namedImport => namedImport.getText());

        editImports(existingDeclaration[0], () => ({
            namedImports: [...modules, namedImport],
        }));

        return;
    }

    addImports(filePath, {
        moduleSpecifier: moduleSpecifier,
        namedImports: [namedImport],
    });
}
