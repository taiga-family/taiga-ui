import {Node, SyntaxKind} from 'ng-morph';

import {getObjectLiteralCallArguments} from '../../utils/get-object-literal-call-arrguments';
import {type ReplacementFunctionParameter} from '../interfaces/replacement-function-parameter';

export function replaceFunctionParameters(
    items: readonly ReplacementFunctionParameter[],
): void {
    items.forEach((item) => {
        const args = getObjectLiteralCallArguments({
            names: item.names,
            moduleSpecifier: item.moduleSpecifier,
        });

        args.forEach((argument) => {
            item.parameters.forEach(({name, renameTo}) => {
                const property = argument.getProperty(name);

                if (!property) {
                    return;
                }

                if (item.valueReplacer) {
                    const replacement = property.getLastChildIfKind(
                        SyntaxKind.StringLiteral,
                    );

                    if (!replacement) {
                        return;
                    }

                    item.valueReplacer.forEach(({from, to}) => {
                        if (replacement.getLiteralValue() === from) {
                            replacement.setLiteralValue(to);
                        }
                    });
                }

                if (!renameTo) {
                    return;
                }

                if (Node.isPropertyAssignment(property)) {
                    property.rename(renameTo);
                }

                if (Node.isShorthandPropertyAssignment(property)) {
                    property.replaceWithText(`${renameTo}: ${name}`);
                }
            });
        });
    });
}
