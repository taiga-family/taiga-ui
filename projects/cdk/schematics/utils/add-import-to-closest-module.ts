import {
    addImportToComponent,
    addImportToNgModule,
    findNgModule,
    getNgComponents,
    infoLog,
    isStandaloneComponent,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    SUCCESS_SYMBOL,
    successLog,
} from 'ng-morph';

import {ALL_TS_FILES} from '../constants/file-globs';
import type {TuiSchema} from '../ng-add/schema';
import {addUniqueImport} from './add-unique-import';

const importsToAdd = new Map<
    string,
    {
        componentPath: string;
        moduleName: string;
        moduleSpecifier: string;
    }
>();

export function addImportToClosestModule(
    componentPath: string,
    moduleName: string,
    moduleSpecifier: string,
): void {
    importsToAdd.set(`${componentPath}_${moduleName}_${moduleSpecifier}`, {
        componentPath,
        moduleName,
        moduleSpecifier,
    });
}

export function saveAddedImports(options: TuiSchema): void {
    importsToAdd.forEach(({componentPath, moduleName, moduleSpecifier}) => {
        !options['skip-logs'] &&
            infoLog(
                `${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} add ${moduleName} declaration from ${moduleSpecifier} to ${componentPath}`,
            );

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

            !options['skip-logs'] &&
                successLog(
                    `${SMALL_TAB_SYMBOL}${SUCCESS_SYMBOL} ${moduleName} added to\n`,
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

            !options['skip-logs'] &&
                successLog(
                    `${SMALL_TAB_SYMBOL}${SUCCESS_SYMBOL} ${moduleName} added to\n`,
                );
        }
    });
}
