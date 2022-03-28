import {ImportSpecifier, Node, VariableDeclaration} from 'ng-morph';
import {getNamedImportReferences} from '../../utils/get-named-import-references';
import {ENUMS_FOR_REPLACE} from '../constants/enums';

export function replaceEnums() {
    ENUMS_FOR_REPLACE.forEach(({name, replaceValues}) => {
        replaceEnumWithString(name, replaceValues);
    });
}

function replaceEnumWithString(enumName: string, replaceValues: Record<string, string>) {
    const references = getNamedImportReferences(enumName);

    references.forEach(ref => {
        const parent = ref.getParent();

        if (Node.isImportSpecifier(parent)) {
            removeImport(parent);
            return;
        }

        if (Node.isTypeReferenceNode(parent)) {
            const declaration = parent.getParent() as VariableDeclaration;
            declaration.removeType();
            return;
        }

        if (!Node.isPropertyAccessExpression(parent)) {
            return;
        }

        const key = Object.keys(replaceValues).find(key => parent.getName() === key);

        if (key) {
            parent.replaceWithText(`'${replaceValues[key]}'`);
        }
    });
}

function removeImport(specifier: ImportSpecifier) {
    if (specifier.getImportDeclaration().getNamedImports().length === 1) {
        specifier.getImportDeclaration().remove();
    } else {
        specifier.remove();
    }
}
