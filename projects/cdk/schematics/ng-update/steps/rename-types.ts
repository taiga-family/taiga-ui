import type {ImportSpecifier} from 'ng-morph';
import {getImports, Node} from 'ng-morph';
import type {TypeNode} from 'ts-morph';

import type {TuiSchema} from '../../ng-add/schema';
import {addUniqueImport} from '../../utils/add-unique-import';
import {
    infoLog,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    SUCCESS_SYMBOL,
    successLog,
} from '../../utils/colored-log';
import {getNamedImportReferences} from '../../utils/get-named-import-references';
import {removeImport, renameImport} from '../../utils/import-manipulations';
import type {ReplacementType} from '../interfaces/replacement-type';

function renameType({
    from,
    to,
    moduleSpecifier,
    preserveGenerics = false,
    removeImport = false,
    newImports = [],
}: ReplacementType): void {
    const references = getNamedImportReferences(from, moduleSpecifier);

    references.forEach((ref) => {
        if (ref.wasForgotten()) {
            return;
        }

        const parent = ref.getParent();

        if (Node.isImportSpecifier(parent)) {
            processImport(parent, from, to, removeImport);
        } else if (Node.isTypeReference(parent)) {
            const targetType =
                preserveGenerics && to ? addGeneric(to, parent.getTypeArguments()) : to;

            parent.replaceWithText(targetType || 'any');
            newImports.forEach(({name, moduleSpecifier}) => {
                addUniqueImport(
                    parent.getSourceFile().getFilePath(),
                    name,
                    moduleSpecifier,
                );
            });
        }
    });
}

function processImport(
    node: ImportSpecifier,
    from: string,
    to?: string,
    remove?: boolean,
): void {
    const filePath = node.getSourceFile().getFilePath();
    const targetImportAlreadyExists = Boolean(
        getImports(filePath, {namedImports: to}).length,
    );

    if (to && !targetImportAlreadyExists && !remove) {
        renameImport(node, removeGeneric(to), removeGeneric(from));
    } else {
        removeImport(node);
    }
}

function removeGeneric(type: string): string {
    return type.replaceAll(/<.*>$/gi, '');
}

function addGeneric(typeName: string, generics: TypeNode[]): string {
    const typeArgs = generics.map((t) => t.getType().getText());
    const genericType = typeArgs.length ? `<${typeArgs.join(', ')}>` : '';

    return typeName + genericType;
}

export function renameTypes(options: TuiSchema, types: readonly ReplacementType[]): void {
    !options['skip-logs'] &&
        infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} renaming types...`);

    types.forEach(renameType);

    !options['skip-logs'] &&
        successLog(`${SMALL_TAB_SYMBOL}${SUCCESS_SYMBOL} types renamed \n`);
}
