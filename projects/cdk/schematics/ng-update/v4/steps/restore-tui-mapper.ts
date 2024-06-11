import {Node} from '@taiga-ui/morph';

import type {TuiSchema} from '../../../ng-add/schema';
import {
    FINISH_SYMBOL,
    infoLog,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    titleLog,
} from '../../../utils/colored-log';
import {getNamedImportReferences} from '../../../utils/get-named-import-references';
import {replaceIdentifier} from '../../steps/replace-identifier';

function updateTuiMapper(options: TuiSchema): void {
    !options['skip-logs'] &&
        infoLog(
            `${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} updating TuiMapper typing to the typed version`,
        );

    const refs = getNamedImportReferences('TuiMapper', '@taiga-ui/cdk');

    for (const ref of refs) {
        if (ref.wasForgotten()) {
            return;
        }

        const parent = ref.getParent();

        if (Node.isTypeReference(parent)) {
            const typeArguments = parent.getTypeArguments();

            if (!typeArguments || typeArguments.length !== 2) {
                return;
            }

            const [inputType] = typeArguments;

            inputType.replaceWithText(`[${inputType.getText()}, ...any]`);
        }
    }
}

function renameTuiTypedMapper(options: TuiSchema): void {
    !options['skip-logs'] &&
        infoLog(
            `${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} renaming TuiTypedMapper to TuiMapper`,
        );

    replaceIdentifier({
        from: {name: 'TuiTypedMapper', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiMapper', moduleSpecifier: '@taiga-ui/cdk'},
    });
}

export function restoreTuiMapper(options: TuiSchema): void {
    updateTuiMapper(options);
    renameTuiTypedMapper(options);

    !options['skip-logs'] && titleLog(`${FINISH_SYMBOL} successfully migrated \n`);
}
