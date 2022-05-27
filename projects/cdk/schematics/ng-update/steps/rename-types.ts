import {getNamedImportReferences} from '../../utils/get-named-import-references';
import {ImportSpecifier, Node} from 'ng-morph';
import {TYPES_TO_RENAME} from '../constants/types';
import {removeImport} from '../../utils/remove-import';

export function renameTypes(): void {
    TYPES_TO_RENAME.forEach(({from, to, moduleSpecifier}) => {
        renameType(from, to, moduleSpecifier);
    });
}

function renameType(
    from: string,
    to?: string,
    moduleSpecifier?: string | string[],
): void {
    const references = getNamedImportReferences(from, moduleSpecifier);

    references.forEach(ref => {
        const parent = ref.getParent();

        if (Node.isImportSpecifier(parent) && to) {
            renameImport(parent, to, from);
            return;
        }

        if (Node.isImportSpecifier(parent) && !to) {
            removeImport(parent);
            return;
        }

        if (Node.isTypeReferenceNode(parent)) {
            parent.replaceWithText(to || 'any');
        }
    });
}

function renameImport(specifier: ImportSpecifier, to: string, from: string) {
    const namedImport = specifier
        .getImportDeclaration()
        .getNamedImports()
        .find(specifier => specifier.getName() === from);
    namedImport?.replaceWithText(to);
}
