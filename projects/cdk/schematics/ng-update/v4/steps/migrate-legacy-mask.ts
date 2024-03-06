import {
    addUniqueImport,
    FINISH_SYMBOL,
    getNamedImportReferences,
    infoLog,
    removeImport,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    titleLog,
} from '@taiga-ui/cdk/schematics';
import {Node} from 'ng-morph';

import type {TuiSchema} from '../../../ng-add/schema';

export function migrateLegacyMask(options: TuiSchema): void {
    !options['skip-logs'] &&
        infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} migrating legacy mask utils...`);

    migrateTuiMaskedMoneyValueIsEmpty(options);
    migrateTuiMaskedNumberStringToNumber(options);

    !options['skip-logs'] && titleLog(`${FINISH_SYMBOL} successfully migrated \n`);
}

function migrateTuiMaskedMoneyValueIsEmpty(options: TuiSchema): void {
    !options['skip-logs'] &&
        infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} tuiMaskedMoneyValueIsEmpty`);

    const references = getNamedImportReferences(
        'tuiMaskedMoneyValueIsEmpty',
        '@taiga-ui/core',
    );

    references.forEach(ref => {
        if (ref.wasForgotten()) {
            return;
        }

        const parent = ref.getParent();

        if (Node.isImportSpecifier(parent)) {
            removeImport(parent);
            addUniqueImport(
                parent.getSourceFile().getFilePath(),
                'maskitoParseNumber',
                '@maskito/kit',
            );
        } else if (Node.isCallExpression(parent)) {
            const [value] = parent.getArguments();

            parent.replaceWithText(
                `Number.isNaN(maskitoParseNumber(${value.getText()}, ','))`,
            );
        }
    });
}

function migrateTuiMaskedNumberStringToNumber(options: TuiSchema): void {
    !options['skip-logs'] &&
        infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} tuiMaskedNumberStringToNumber`);

    const references = getNamedImportReferences(
        'tuiMaskedNumberStringToNumber',
        '@taiga-ui/core',
    );

    references.forEach(ref => {
        if (ref.wasForgotten()) {
            return;
        }

        const parent = ref.getParent();

        if (Node.isImportSpecifier(parent)) {
            removeImport(parent);
            addUniqueImport(
                parent.getSourceFile().getFilePath(),
                'maskitoParseNumber',
                '@maskito/kit',
            );
        } else if (Node.isCallExpression(parent)) {
            const [value, decimalSeparator] = parent.getArguments();

            parent.replaceWithText(
                `maskitoParseNumber(${value.getText()}, ${decimalSeparator.getText()})`,
            );
        }
    });
}
