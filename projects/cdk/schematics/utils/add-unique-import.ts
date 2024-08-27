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

    const imports = existingDeclaration?.[0];

    if (imports) {
        const modules = imports
            .getNamedImports()
            .map((namedImport) => namedImport.getText());

        editImports(imports, () => ({
            namedImports: [...modules, namedImport],
            isTypeOnly: false,
        }));

        return;
    }

    addImports(filePath, {
        moduleSpecifier,
        namedImports: [namedImport],
        isTypeOnly: false,
    });
}
