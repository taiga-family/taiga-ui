import type {ObjectLiteralExpression} from 'ng-morph';
import {Node} from 'ng-morph';

export function pushToObjectArrayProperty(
    objectExpression: ObjectLiteralExpression,
    propertyName: string,
    initializer: string,
    {
        unique = false,
        forceToArray = false,
        index = null,
    }: {forceToArray?: boolean; index?: number | null; unique?: boolean} = {},
): void {
    const property =
        objectExpression.getProperty(propertyName) ??
        objectExpression.addProperty(`${propertyName}: []`);

    if (!Node.isPropertyAssignment(property)) {
        return;
    }

    if (forceToArray && !Node.isArrayLiteralExpression(property.getInitializer())) {
        property.setInitializer(`[${property?.getInitializer()?.getText()}]`);
    }

    const importsInitializer = property.getInitializer();

    if (!Node.isArrayLiteralExpression(importsInitializer)) {
        return;
    }

    if (
        unique &&
        importsInitializer
            .getElements()
            .some((element) => element.getText() === initializer)
    ) {
        return;
    }

    if (typeof index === 'number') {
        importsInitializer.insertElement(index, initializer);
    } else {
        importsInitializer.addElement(initializer);
    }
}
