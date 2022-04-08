import {getNamedImportReferences} from '../../utils/get-named-import-references';
import {Node} from 'ng-morph';
import {removeImport} from '../../utils/remove-import';
import {addUniqueImport} from '../../utils/add-unique-import';
import {CONSTS_TO_REPLACE, ReplacementConst} from '../constants/consts';

export function replaceConsts() {
    CONSTS_TO_REPLACE.forEach(constToReplace => replaceConst(constToReplace));
}

export function replaceConst({from, to}: ReplacementConst) {
    const references = getNamedImportReferences(from.name, from.moduleSpecifier);

    for (let ref of references) {
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
    }
}
