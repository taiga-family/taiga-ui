import {Node} from 'ng-morph';

import {
    infoLog,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    SUCCESS_SYMBOL,
    successLog,
} from '../../utils/colored-log';
import {getNamedImportReferences} from '../../utils/get-named-import-references';
import {removeImport} from '../../utils/import-manipulations';
import {DEPRECATED_FUNCTIONS} from '../constants/deprecated-functions';

export function replaceFunctions(): void {
    infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} functions replacing...`);

    replacePadStart(getNamedImportReferences(`padStart`, `@taiga-ui/cdk`));
    replaceFallbackValue(getNamedImportReferences(`fallbackValue`, `@taiga-ui/cdk`));
    replaceCustomEvent(getNamedImportReferences(`tuiCustomEvent`, `@taiga-ui/cdk`));
    replaceClosestElement(getNamedImportReferences(`getClosestElement`, `@taiga-ui/cdk`));
    replaceDeprecatedFunction();

    successLog(`${SMALL_TAB_SYMBOL}${SUCCESS_SYMBOL} functions replaced \n`);
}

function replaceDeprecatedFunction(): void {
    DEPRECATED_FUNCTIONS.forEach(({from, to, moduleSpecifier}) => {
        getNamedImportReferences(from, moduleSpecifier).forEach(ref => {
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

function replacePadStart(references: Node[]): void {
    references.forEach(ref => {
        const parent = ref.getParent();

        if (Node.isImportSpecifier(parent)) {
            removeImport(parent);
        } else if (Node.isCallExpression(parent)) {
            const [targetString, length, pad] = parent.getArguments();

            parent.replaceWithText(
                `${targetString.getText()}.padStart(${length.getText()}, ${
                    pad?.getText() ?? `" "`
                })`,
            );
        }
    });
}

function replaceClosestElement(references: Node[]): void {
    references.forEach(ref => {
        const parent = ref.getParent();

        if (Node.isImportSpecifier(parent)) {
            removeImport(parent);
        } else if (Node.isCallExpression(parent)) {
            const [firstArg, secondArg] = parent.getArguments();
            const firstArgText = firstArg.getText();
            const element = firstArgText.includes(` as `) // e.g, `getClosestElement(el as Element, ...)`
                ? `(${firstArgText})`
                : firstArgText;

            parent.replaceWithText(`${element}.closest(${secondArg.getText()})`);
        }
    });
}

function replaceCustomEvent(references: Node[]): void {
    references.forEach(ref => {
        const parent = ref.getParent();

        if (Node.isImportSpecifier(parent)) {
            removeImport(parent);
        } else if (Node.isCallExpression(parent)) {
            const [firstArg, secondArg] = parent.getArguments();

            parent.replaceWithText(
                `new CustomEvent(${firstArg.getText()}, ${secondArg.getText()})`,
            );
        }
    });
}

function replaceFallbackValue(references: Node[]): void {
    references.forEach(ref => {
        const parent = ref.getParent();

        if (Node.isImportSpecifier(parent)) {
            removeImport(parent);
        } else if (Node.isCallExpression(parent)) {
            const [firstArg, secondArg] = parent.getArguments();

            parent.replaceWithText(`${firstArg.getText()} ?? ${secondArg.getText()}`);
        }
    });
}
