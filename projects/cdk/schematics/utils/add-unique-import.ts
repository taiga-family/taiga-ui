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
        const declaration = existingDeclaration[0];

        if (declaration) {
            const modules = declaration
                .getNamedImports()
                .map((namedImport) => namedImport.getText());

            editImports(declaration, () => ({
                namedImports: [...modules, namedImport],
            }));
        }

        return;
    }

    addImports(filePath, {
        moduleSpecifier,
        namedImports: [namedImport],
    });
}
