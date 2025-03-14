import type {PropertyAccessExpression, TypeReferenceNode} from 'ng-morph';
import {
    infoLog,
    Node,
    PROCESSING_SYMBOL,
    processLog,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    SUCCESS_SYMBOL,
    successLog,
    SyntaxKind,
} from 'ng-morph';

import type {TuiSchema} from '../../ng-add/schema';
import {addUniqueImport} from '../../utils/add-unique-import';
import {getNamedImportReferences} from '../../utils/get-named-import-references';
import {removeImport} from '../../utils/import-manipulations';
import type {ReplacementService} from '../interfaces/replacement-service';

function replaceService(
    {from, to, replaceMethods}: ReplacementService,
    options: TuiSchema,
): void {
    !options['skip-logs'] &&
        processLog(
            `${SMALL_TAB_SYMBOL}${SMALL_TAB_SYMBOL}${PROCESSING_SYMBOL}replacing ${from.name}...`,
        );

    const references = getNamedImportReferences(from.name, from.moduleSpecifier);

    references.forEach((ref) => {
        if (ref.wasForgotten()) {
            return;
        }

        const parent = ref.getParent();

        if (Node.isImportSpecifier(parent)) {
            removeImport(parent);
            addUniqueImport(
                parent.getSourceFile().getFilePath(),
                to.namedImport || to.name,
                to.moduleSpecifier,
            );

            return;
        }

        if (Node.isTypeReference(parent) && replaceMethods?.length) {
            replaceProperties(parent, replaceMethods);
        }

        ref.replaceWithText(to.name);
    });
}

function replaceProperties(
    parent: TypeReferenceNode,
    replaceProperties: ReplacementService['replaceMethods'],
): void {
    const statement = parent.getParent();
    const [identifier] = statement.getChildrenOfKind(SyntaxKind.Identifier);

    identifier?.findReferencesAsNodes().forEach((ref) => {
        let parent = ref.getParent();

        if (
            (Node.isPropertyAccessExpression(parent) &&
                parent.getText().startsWith('this.')) ||
            Node.isCallExpression(parent)
        ) {
            parent = parent.getParentIfKind(SyntaxKind.PropertyAccessExpression);
        }

        if (Node.isPropertyAccessExpression(parent)) {
            replaceProperty(parent, replaceProperties);
        }
    });
}

function replaceProperty(
    node: PropertyAccessExpression,
    properties: ReplacementService['replaceMethods'],
): void {
    const identifiers = node.getChildrenOfKind(SyntaxKind.Identifier);

    identifiers.forEach((identifier) => {
        const property = properties?.find(
            (property) => property.from === identifier.getText(),
        );

        if (property) {
            identifier.replaceWithText(property.to);
        }
    });
}

export function replaceServices(
    options: TuiSchema,
    services: readonly ReplacementService[],
): void {
    !options['skip-logs'] &&
        infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} replacing services...`);

    services.forEach((service) => replaceService(service, options));

    !options['skip-logs'] &&
        successLog(`${SMALL_TAB_SYMBOL}${SUCCESS_SYMBOL} services replaced \n`);
}
