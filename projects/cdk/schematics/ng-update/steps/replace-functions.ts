import {getNamedImportReferences} from '../../utils/get-named-import-references';
import {Node} from 'ng-morph';
import {removeImport} from '../../utils/import-manipulations';
import {DEPRECATED_FUNCTIONS} from '../constants/deprecated-functions';
import {
    infoLog,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    SUCCESS_SYMBOL,
    successLog,
} from '../../utils/colored-log';

export function replaceFunctions() {
    infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} functions replacing...`);

    replacePadStart(getNamedImportReferences('padStart', '@taiga-ui/cdk'));
    replaceFallbackValue(getNamedImportReferences('fallbackValue', '@taiga-ui/cdk'));
    replaceCustomEvent(getNamedImportReferences('tuiCustomEvent', '@taiga-ui/cdk'));
    replaceClosestElement(getNamedImportReferences('getClosestElement', '@taiga-ui/cdk'));
    modifyFormatNumberArgs();
    replaceDeprecatedFunction();

    successLog(`${SMALL_TAB_SYMBOL}${SUCCESS_SYMBOL} functions replaced \n`);
}

function replaceDeprecatedFunction() {
    DEPRECATED_FUNCTIONS.forEach(({from, to, moduleSpecifier}) => {
        getNamedImportReferences(from, moduleSpecifier).forEach(ref => {
            if (ref.wasForgotten()) {
                return;
            }

            const parent = ref.getParent();

            if (Node.isImportSpecifier(parent) || Node.isCallExpression(parent)) {
                parent?.replaceWithText(
                    parent
                        ?.getFullText()
                        .trim()
                        .replace(from, to ?? from),
                );
            }
        });
    });
}

function replacePadStart(references: Node[]) {
    references.forEach(ref => {
        const parent = ref.getParent();

        if (Node.isImportSpecifier(parent)) {
            removeImport(parent);
        } else if (Node.isCallExpression(parent)) {
            const [targetString, length, pad] = parent.getArguments();
            parent.replaceWithText(
                `${targetString.getText()}.padStart(${length.getText()}, ${
                    pad?.getText() ?? '" "'
                })`,
            );
        }
    });
}

function replaceClosestElement(references: Node[]) {
    references.forEach(ref => {
        const parent = ref.getParent();
        if (Node.isImportSpecifier(parent)) {
            removeImport(parent);
        } else if (Node.isCallExpression(parent)) {
            const [firstArg, secondArg] = parent.getArguments();
            parent.replaceWithText(
                `${firstArg.getText()}.closest(${secondArg.getText()})`,
            );
        }
    });
}

function replaceCustomEvent(references: Node[]) {
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

function replaceFallbackValue(references: Node[]) {
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

function modifyFormatNumberArgs(): void {
    [
        ...getNamedImportReferences('formatNumber', '@taiga-ui/core'),
        ...getNamedImportReferences('tuiFormatNumber', '@taiga-ui/core'),
    ]
        .map(ref => ref.getParent())
        .filter(Node.isCallExpression)
        .forEach(fn => {
            const args = fn.getArguments();

            if (args.length > 1) {
                const [
                    value,
                    decimalLimit = `Infinity`,
                    decimalSeparator = `','`,
                    thousandSeparator = `'\u00A0'`,
                    zeroPadding = true,
                ] = args.map(arg => arg.getText());
                const notNullDecimalLimit =
                    decimalLimit === `null` ? `Infinity` : decimalLimit;
                const conditionalDecimalLimit = !Number.isNaN(+notNullDecimalLimit)
                    ? notNullDecimalLimit
                    : `${decimalLimit} === null ? Infinity : ${decimalLimit}`;

                fn.replaceWithText(
                    `tuiFormatNumber(${value}, {decimalLimit: ${conditionalDecimalLimit}, decimalSeparator: ${decimalSeparator}, thousandSeparator: ${thousandSeparator}, zeroPadding: ${zeroPadding}})`,
                );
            }
        });
}
