import {Node, SyntaxKind} from 'ng-morph';

import {getNamedImportReferences} from '../../utils/get-named-import-references';
import {type ReplacementFunctionParameter} from '../interfaces/replacement-function-parameter';

export function replaceFunctionParameters(
    items: readonly ReplacementFunctionParameter[],
): void {
    items.forEach((item) => replaceFunctionParameter(item));
}

function replaceFunctionParameter(item: ReplacementFunctionParameter): void {
    const references = item.names.flatMap((name) =>
        getNamedImportReferences(name, item.moduleSpecifier),
    );

    references.forEach((ref) => {
        if (ref.wasForgotten()) {
            return;
        }

        const parent = ref.getParent();

        if (!Node.isCallExpression(parent)) {
            return;
        }

        const [value] = parent.getArguments();

        if (!Node.isObjectLiteralExpression(value)) {
            return;
        }

        item.parameters.forEach((parameter) => {
            const property = value.getProperty(parameter);

            if (!property) {
                return;
            }

            const replacement = property.getLastChildIfKind(SyntaxKind.StringLiteral);

            if (!replacement) {
                return;
            }

            item.valueReplacer.forEach(({from, to}) => {
                if (replacement.getLiteralValue() === from) {
                    replacement.setLiteralValue(to);
                }
            });
        });
    });
}
