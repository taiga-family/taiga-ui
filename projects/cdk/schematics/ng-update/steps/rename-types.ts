import {getNamedImportReferences} from '../../utils/get-named-import-references';
import {Node} from 'ng-morph';
import {TYPES_TO_RENAME} from '../constants/types';

export function renameTypes(): void {
    TYPES_TO_RENAME.forEach(({from, to, moduleSpecifier}) => {
        renameType(from, to, moduleSpecifier);
    });
}

function renameType(from: string, to: string, moduleSpecifier?: string | string[]): void {
    const references = getNamedImportReferences(from, moduleSpecifier);

    for (let ref of references) {
        const parent = ref.getParent();

        if (Node.isImportSpecifier(parent)) {
            const namedImport = parent
                .getImportDeclaration()
                .getNamedImports()
                .find(specifier => specifier.getName() === from);
            namedImport?.replaceWithText(to);
        } else if (Node.isTypeReferenceNode(parent)) {
            parent.replaceWithText(to);
        }
    }
}
