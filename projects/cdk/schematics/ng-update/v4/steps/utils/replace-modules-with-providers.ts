import {
    addProviderToComponent,
    addProviderToNgModule,
    getNgComponents,
    getNgModules,
    Node,
} from 'ng-morph';

import type {TuiSchema} from '../../../../ng-add/schema';
import {addUniqueImport} from '../../../../utils/add-unique-import';
import {
    infoLog,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    SUCCESS_SYMBOL,
    successLog,
} from '../../../../utils/colored-log';
import {getNamedImportReferences} from '../../../../utils/get-named-import-references';
import {removeImport} from '../../../../utils/import-manipulations';

interface ModuleToReplace {
    from: {name: string; moduleSpecifier: string};
    to: {name: string; providerSpecifier: string};
}

export const replaceModulesWithProviders = (
    options: TuiSchema,
    list: ModuleToReplace[],
): void => {
    !options['skip-logs'] &&
        infoLog(
            `${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} replacing modules with providers...`,
        );

    list.forEach(replaceModule);

    !options['skip-logs'] &&
        successLog(`${SMALL_TAB_SYMBOL}${SUCCESS_SYMBOL} modules replaced \n`);
};

function replaceModule({from, to}: ModuleToReplace): void {
    const references = getNamedImportReferences(from.name, from.moduleSpecifier);

    references.forEach((ref) => {
        if (ref.wasForgotten()) {
            return;
        }

        const parent = ref.getParent();

        if (Node.isImportSpecifier(parent)) {
            removeImport(parent);
            addImport(to, parent.getSourceFile().getFilePath());
        } else if (Node.isArrayLiteralExpression(parent)) {
            parent.removeElement(ref.getChildIndex());

            addProvider(to, parent.getSourceFile().getFilePath());
        }
    });
}

function addImport(identifier: ModuleToReplace['to'], filePath: string): void {
    addUniqueImport(filePath, identifier.name, identifier.providerSpecifier);
}

function addProvider(identifier: ModuleToReplace['to'], filePath: string): void {
    const provider = `${identifier.name}()`;

    const componentClass = getNgComponents(filePath)[0];

    if (componentClass) {
        addProviderToComponent(componentClass, provider);
    }

    const moduleClass = getNgModules(filePath)[0];

    if (moduleClass) {
        addProviderToNgModule(moduleClass, provider);
    }
}
