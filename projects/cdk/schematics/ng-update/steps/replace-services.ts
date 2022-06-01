import {ReplacementService, SERVICES_TO_REPLACE} from '../constants/services';
import {getNamedImportReferences} from '../../utils/get-named-import-references';
import {Node, PropertyAccessExpression, SyntaxKind, TypeReferenceNode} from 'ng-morph';
import {removeImport} from '../../utils/import-manipulations';
import {addUniqueImport} from '../../utils/add-unique-import';

export function replaceServices(): void {
    SERVICES_TO_REPLACE.forEach(service => replaceService(service));
}

function replaceService({from, to, replaceMethods}: ReplacementService): void {
    const references = getNamedImportReferences(from.name, from.moduleSpecifier);

    references.forEach(ref => {
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

        if (Node.isTypeReferenceNode(parent) && replaceMethods?.length) {
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
    const identifier = statement.getChildrenOfKind(SyntaxKind.Identifier)[0];

    identifier.findReferencesAsNodes().forEach(ref => {
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
            return;
        }
    });
}

function replaceProperty(
    node: PropertyAccessExpression,
    properties: ReplacementService['replaceMethods'],
): void {
    const identifiers = node.getChildrenOfKind(SyntaxKind.Identifier);

    identifiers.forEach(identifier => {
        const property = properties?.find(
            property => property.from === identifier.getText(),
        );

        if (property) {
            identifier.replaceWithText(property.to);
        }
    });
}
