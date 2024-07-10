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
import type {ModuleToReplace, ProviderToReplace} from '../constants/modules-to-replace';

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
    const toReplace = Array.isArray(to) ? to : [to];

    references.forEach((ref) => {
        if (ref.wasForgotten()) {
            return;
        }

        const parent = ref.getParent();

        if (Node.isImportSpecifier(parent)) {
            removeImport(parent);
            toReplace.forEach((provider) =>
                addImport(provider, parent.getSourceFile().getFilePath()),
            );
        } else if (Node.isArrayLiteralExpression(parent)) {
            const index = parent
                .getElements()
                .findIndex((el) => el.getText() === from.name);

            parent.removeElement(index);
            toReplace.forEach((provider) =>
                addProvider(provider, parent.getSourceFile().getFilePath()),
            );
        }
    });
}

function addImport(identifier: ProviderToReplace, filePath: string): void {
    addUniqueImport(filePath, identifier.name, identifier.providerSpecifier);
}

function addProvider(identifier: ProviderToReplace, filePath: string): void {
    const provider = `${identifier.name}${identifier.isFunction ? '()' : ''}`;

    const componentClass = getNgComponents(filePath)[0];

    if (componentClass) {
        addProviderToComponent(componentClass, provider);
    }

    const moduleClass = getNgModules(filePath)[0];

    if (moduleClass) {
        addProviderToNgModule(moduleClass, provider);
    }
}
