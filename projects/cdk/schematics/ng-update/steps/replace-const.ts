import {getNamedImportReferences} from '../../utils/get-named-import-references';
import {Node} from 'ng-morph';
import {removeImport} from '../../utils/import-manipulations';
import {addUniqueImport} from '../../utils/add-unique-import';
import {CONSTS_TO_REPLACE, ReplacementConst} from '../constants/consts';
import {
    infoLog,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    SUCCESS_SYMBOL,
    successLog,
} from '../../utils/colored-log';

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
