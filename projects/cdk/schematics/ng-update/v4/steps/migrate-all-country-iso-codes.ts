import {SyntaxKind} from '@taiga-ui/morph';

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

export function migrateAllCountryIsoCodes(options: TuiSchema): void {
    !options['skip-logs'] &&
        infoLog(
            `${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} migrating Object.values(TuiCountryIsoCode)...`,
        );

    const references = getNamedImportReferences('TuiCountryIsoCode', '@taiga-ui/i18n');

    references.forEach(ref => {
        if (ref.wasForgotten()) {
            return;
        }

        const possibleObjectValues = ref.getFirstAncestorByKind(
            SyntaxKind.CallExpression,
        );

        if (possibleObjectValues?.getText() === 'Object.values(TuiCountryIsoCode)') {
            addUniqueImport(
                ref.getSourceFile().getFilePath(),
                'getCountries',
                'libphonenumber-js',
            );
            possibleObjectValues.replaceWithText('getCountries()');
        }
    });

    !options['skip-logs'] && titleLog(`${FINISH_SYMBOL} successfully migrated \n`);
}
