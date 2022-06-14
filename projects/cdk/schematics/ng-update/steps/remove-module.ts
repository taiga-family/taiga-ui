import {Node} from 'ng-morph';
import {getNamedImportReferences} from '../../utils/get-named-import-references';
import {removeImport} from '../../utils/import-manipulations';
import {REMOVED_MODULES} from '../constants/modules';

export function removeModules(): void {
    REMOVED_MODULES.forEach(({name, moduleSpecifier}) =>
        removeModule(name, moduleSpecifier),
    );
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
