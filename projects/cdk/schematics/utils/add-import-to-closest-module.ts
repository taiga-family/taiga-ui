import {addImportToNgModule} from 'ng-morph';

import {addImportToComponent} from '../utils/add-import-to-component';
import {addUniqueImport} from './add-unique-import';
import {isStandaloneComponent} from './angular/is-standalone-component';
import {getNgComponents} from './angular/ng-component';
import {findNgModule} from './angular/ng-module';

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

    const ngModule = findNgModule(ngComponent);

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
