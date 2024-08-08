import {
    addImportToComponent,
    addImportToNgModule,
    findNgModule,
    getNgComponents,
    isStandaloneComponent,
} from 'ng-morph';
import type {ClassDeclaration} from 'ts-morph';

import {ALL_TS_FILES} from '../constants/file-globs';
import {addUniqueImport} from './add-unique-import';

export function addImportToClosestModule(
    componentPath: string,
    moduleName: string,
    moduleSpecifier: string,
): void {
    const [ngComponent] = getNgComponents(componentPath) as [
        ClassDeclaration | undefined,
    ];

    if (!ngComponent) {
        return;
    }

    if (isStandaloneComponent(ngComponent)) {
        addImportToComponent(ngComponent, moduleName, {unique: true});
        addUniqueImport(
            ngComponent.getSourceFile().getFilePath(),
            moduleName,
            moduleSpecifier,
        );

        return;
    }

    const ngModule = findNgModule(ngComponent, ALL_TS_FILES);

    if (ngModule) {
        addImportToNgModule(ngModule, moduleName, {
            unique: true,
        });
        addUniqueImport(
            ngModule.getSourceFile().getFilePath(),
            moduleName,
            moduleSpecifier,
        );
    }
}
