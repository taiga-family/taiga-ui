import {ImportSpecifier, Node, VariableDeclaration} from 'ng-morph';
import {getNamedImportReferences} from '../../utils/get-named-import-references';
import {ENUMS_TO_REPLACE} from '../constants/enums';
import {removeImport} from '../../utils/import-manipulations';
import {
    infoLog,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    SUCCESS_SYMBOL,
    successLog,
} from '../../utils/colored-log';
import {TuiSchema} from '../../ng-add/schema';

export function replaceEnums(options: TuiSchema): void {
    !options['skip-logs'] &&
        infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} replacing enums imports...`);

    ENUMS_TO_REPLACE.forEach(({name, replaceValues, keepAsType}) =>
        replaceEnumWithString(name, replaceValues, keepAsType),
    );

    !options['skip-logs'] &&
        successLog(`${SMALL_TAB_SYMBOL}${SUCCESS_SYMBOL} enums replaced \n`);
}

function replaceEnumWithString(
    enumName: string,
    replaceValues: Record<string, string>,
    keepAsType = true,
) {
    const references = getNamedImportReferences(enumName);

    for (let ref of references) {
        const parent = ref.getParent();

        if (Node.isImportSpecifier(parent) && !(keepAsType && containTypeRef(parent))) {
            removeImport(parent);
            continue;
        }

        if (Node.isTypeReferenceNode(parent) && !keepAsType) {
            const declaration = parent.getParent() as VariableDeclaration;
            declaration.removeType?.();
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

function containTypeRef(node: ImportSpecifier): boolean {
    return node
        .getNameNode()
        .findReferencesAsNodes()
        .some(ref => Node.isTypeReferenceNode(ref.getParent()));
}
