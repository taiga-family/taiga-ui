import {Node} from 'ng-morph';

import {TuiSchema} from '../../ng-add/schema';
import {
    infoLog,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    SUCCESS_SYMBOL,
    successLog,
} from '../../utils/colored-log';
import {getNamedImportReferences} from '../../utils/get-named-import-references';
import {removeImport} from '../../utils/import-manipulations';
import {REMOVED_MODULES} from '../constants/modules';

export function removeModules(options: TuiSchema): void {
    !options[`skip-logs`] &&
        infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} removing modules...`);

    REMOVED_MODULES.forEach(({name, moduleSpecifier}) =>
        removeModule(name, moduleSpecifier),
    );

    !options[`skip-logs`] &&
        successLog(`${SMALL_TAB_SYMBOL}${SUCCESS_SYMBOL} modules removed \n`);
}

export function removeModule(name: string, moduleSpecifier: string): void {
    const references = getNamedImportReferences(name, moduleSpecifier);

    references.forEach(ref => {
        const parent = ref.getParent();

        if (Node.isImportSpecifier(parent)) {
            removeImport(parent);
        } else if (Node.isArrayLiteralExpression(parent)) {
            const index = parent.getElements().findIndex(el => el.getText() === name);

            parent.removeElement(index);
        }
    });
}
