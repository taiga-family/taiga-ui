import {Node, VariableDeclaration} from 'ng-morph';
import {getNamedImportReferences} from '../../utils/get-named-import-references';
import {ENUMS_FOR_REPLACE} from '../constants/enums';
import {removeImport} from '../../utils/remove-import';

export function replaceEnums() {
    ENUMS_FOR_REPLACE.forEach(({name, replaceValues}) => {
        replaceEnumWithString(name, replaceValues);
    });
}

function replaceEnumWithString(enumName: string, replaceValues: Record<string, string>) {
    const references = getNamedImportReferences(enumName);

    for (let ref of references) {
        const parent = ref.getParent();

        if (Node.isImportSpecifier(parent)) {
            removeImport(parent);
            continue;
        }

        if (Node.isTypeReferenceNode(parent)) {
            const declaration = parent.getParent() as VariableDeclaration;
            declaration.removeType();
            continue;
        }

        if (!Node.isPropertyAccessExpression(parent)) {
            continue;
        }

        const key = Object.keys(replaceValues).find(key => parent.getName() === key);

        if (key) {
            parent.replaceWithText(`'${replaceValues[key]}'`);
        }
    }
}
