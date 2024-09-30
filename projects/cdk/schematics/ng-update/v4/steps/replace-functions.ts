import {Node} from 'ng-morph';

import {getNamedImportReferences} from '../../../utils/get-named-import-references';
import type {ReplacementType} from '../../interfaces/replacement-type';

export function replaceFunctions(functions: readonly ReplacementType[]): void {
    functions.forEach(({from, to, moduleSpecifier}) => {
        getNamedImportReferences(from, moduleSpecifier).forEach((ref) => {
            if (ref.wasForgotten()) {
                return;
            }

            const parent = ref.getParent();

            if (Node.isImportSpecifier(parent) || Node.isCallExpression(parent)) {
                parent?.replaceWithText(
                    parent
                        ?.getText({includeJsDocComments: false})
                        .trim()
                        .replace(from, to ?? from),
                );
            }
        });
    });
}
