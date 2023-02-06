import {Node} from 'ng-morph';

import {addUniqueImport} from '../../utils/add-unique-import';
import {
    infoLog,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    SUCCESS_SYMBOL,
    successLog,
} from '../../utils/colored-log';
import {getNamedImportReferences} from '../../utils/get-named-import-references';
import {removeImport} from '../../utils/import-manipulations';
import {CONSTS_TO_REPLACE, ReplacementConst} from '../constants/consts';

export function replaceConstants(): void {
    infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} replacing constants...`);

    CONSTS_TO_REPLACE.forEach(constToReplace => replaceConst(constToReplace));

    successLog(`${SMALL_TAB_SYMBOL}${SUCCESS_SYMBOL} constants replaced \n`);
}

export function replaceConst({from, to}: ReplacementConst): void {
    const references = getNamedImportReferences(from.name, from.moduleSpecifier);

    references.forEach(ref => {
        const parent = ref.getParent();

        if (Node.isImportSpecifier(parent)) {
            removeImport(parent);
            addUniqueImport(
                parent.getSourceFile().getFilePath(),
                to.namedImport || to.name,
                to.moduleSpecifier,
            );
        } else {
            ref?.replaceWithText(to.name);
        }
    });
}
