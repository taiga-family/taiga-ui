import {getImports, getSourceFiles} from 'ng-morph';

import {ALL_TS_FILES} from '../constants/file-globs';

export function swapNamedImports(from: string, to: string): void {
    const sourceFiles = getSourceFiles(ALL_TS_FILES);

    sourceFiles.forEach((file) => {
        const imports = getImports(file.getFilePath());
        const newImport = imports.find((e) => e.getText().includes(to));

        if (newImport) {
            const importNames = newImport.getNamedImports().map((name) => name.getName());
            const oldImport = imports.find((e) => e.getText().includes(from));

            for (const item of oldImport?.getNamedImports() ?? []) {
                if (!importNames.includes(item.getName())) {
                    newImport.addNamedImport(item.getName());
                }
            }

            oldImport?.remove();
        }
    });
}
