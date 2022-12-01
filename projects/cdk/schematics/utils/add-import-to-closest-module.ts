import {addImportToNgModule} from 'ng-morph';

import {addUniqueImport} from './add-unique-import';
import {getNgComponents} from './angular/ng-component';
import {findNgModule} from './angular/ng-module';

export function addImportToClosestModule(
    componentPath: string,
    moduleName: string,
    moduleSpecifier: string,
): void {
    const [ngComponent] = getNgComponents(componentPath);
    const ngModule = ngComponent ? findNgModule(ngComponent) : null;

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
