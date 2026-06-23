import {Node, type ObjectLiteralExpression} from 'ng-morph';

import {getNamedImportReferences} from './get-named-import-references';

export function getObjectLiteralCallArguments({
    names,
    moduleSpecifier,
    argumentIndex = 0,
}: {
    readonly names: readonly string[];
    readonly moduleSpecifier: string;
    readonly argumentIndex?: number;
}): ObjectLiteralExpression[] {
    const references = names.flatMap((name) =>
        getNamedImportReferences(name, moduleSpecifier),
    );

    return references.flatMap((reference) => {
        if (reference.wasForgotten()) {
            return [];
        }

        const callExpression = reference.getParent();

        if (
            !Node.isCallExpression(callExpression) ||
            callExpression.getExpression() !== reference
        ) {
            return [];
        }

        const argument = callExpression.getArguments()[argumentIndex];

        return Node.isObjectLiteralExpression(argument) ? [argument] : [];
    });
}
