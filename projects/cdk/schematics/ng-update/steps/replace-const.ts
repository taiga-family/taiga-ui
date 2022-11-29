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
import {TuiSchema} from '../../ng-add/schema';

export function replaceConstants(options: TuiSchema): void {
    !options['skip-logs'] &&
        infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} replacing constants...`);

    CONSTS_TO_REPLACE.forEach(constToReplace => replaceConst(constToReplace));

    !options['skip-logs'] &&
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
