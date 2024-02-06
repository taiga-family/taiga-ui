import {getImports, ImportSpecifier, Node} from 'ng-morph';
import {TypeNode} from 'ts-morph';

import {TuiSchema} from '../../ng-add/schema';
import {
    infoLog,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    SUCCESS_SYMBOL,
    successLog,
} from '../../utils/colored-log';
import {getNamedImportReferences} from '../../utils/get-named-import-references';
import {removeImport, renameImport} from '../../utils/import-manipulations';
import {ReplacementType} from '../interfaces/replacement-type';

function renameType(
    from: string,
    to?: string,
    moduleSpecifier?: string[] | string,
    preserveGenerics = false,
): void {
    const references = getNamedImportReferences(from, moduleSpecifier);

    references.forEach(ref => {
        if (ref.wasForgotten()) {
            return;
        }

        const parent = ref.getParent();

        if (Node.isImportSpecifier(parent)) {
            processImport(parent, from, to);
        } else if (Node.isTypeReference(parent)) {
            const targetType =
                preserveGenerics && to ? addGeneric(to, parent.getTypeArguments()) : to;

            parent.replaceWithText(targetType || 'any');
        }
    });
}

function processImport(node: ImportSpecifier, from: string, to?: string): void {
    const filePath = node.getSourceFile().getFilePath();
    const targetImportAlreadyExists = Boolean(
        getImports(filePath, {namedImports: to}).length,
    );

    if (to && !targetImportAlreadyExists) {
        renameImport(node, removeGeneric(to), removeGeneric(from));
    } else {
        removeImport(node);
    }
}

function removeGeneric(type: string): string {
    return type.replace(/<.*>$/gi, '');
}

function addGeneric(typeName: string, generics: TypeNode[]): string {
    const typeArgs = generics.map(t => t.getType().getText());
    const genericType = typeArgs.length ? `<${typeArgs.join(', ')}>` : '';

    return typeName + genericType;
}

export function renameTypes(options: TuiSchema, types: readonly ReplacementType[]): void {
    !options['skip-logs'] &&
        infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} renaming types...`);

    types.forEach(({from, to, moduleSpecifier, preserveGenerics}) =>
        renameType(from, to, moduleSpecifier, preserveGenerics),
    );

    !options['skip-logs'] &&
        successLog(`${SMALL_TAB_SYMBOL}${SUCCESS_SYMBOL} types renamed \n`);
}
