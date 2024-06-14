import {Node} from 'ng-morph';

import type {TuiSchema} from '../../../ng-add/schema';
import {addUniqueImport} from '../../../utils/add-unique-import';
import {
    FINISH_SYMBOL,
    infoLog,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    titleLog,
} from '../../../utils/colored-log';
import {getNamedImportReferences} from '../../../utils/get-named-import-references';
import {removeImport} from '../../../utils/import-manipulations';

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
