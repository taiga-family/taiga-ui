import {ALL_TS_FILES} from '@taiga-ui/cdk/schematics';
import {
    addImportToNgModule,
    findNgModule,
    getNgComponents,
    isStandaloneComponent,
} from 'ng-morph';
import {addImportToComponent} from 'ng-morph/ng/component/add-import-to-component';

import {addUniqueImport} from './add-unique-import';

export function addImportToClosestModule(
    componentPath: string,
    moduleName: string,
    moduleSpecifier: string,
): void {
    const [ngComponent] = getNgComponents(componentPath);

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
