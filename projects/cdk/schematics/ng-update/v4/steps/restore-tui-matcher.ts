import {Node} from 'ng-morph';

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

function updateTuiMatcher(options: TuiSchema): void {
    !options['skip-logs'] &&
        infoLog(
            `${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} updating TuiMatcher typing to the typed version`,
        );

    const refs = getNamedImportReferences('TuiMatcher', '@taiga-ui/cdk');

    for (const ref of refs) {
        if (ref.wasForgotten()) {
            return;
        }

        const parent = ref.getParent();

        if (Node.isTypeReference(parent)) {
            const typeArguments = parent.getTypeArguments();

            if (!typeArguments || typeArguments.length !== 1) {
                return;
            }

            const [inputType] = typeArguments;

            inputType.replaceWithText(`[${inputType.getText()}, ...any]`);
        }
    }
}

function renameTuiTypedMatcher(options: TuiSchema): void {
    !options['skip-logs'] &&
        infoLog(
            `${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} renaming TuiTypedMatcher to TuiMatcher`,
        );

    replaceIdentifier({
        from: {name: 'TuiTypedMatcher', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiMatcher', moduleSpecifier: '@taiga-ui/cdk'},
    });
}

export function restoreTuiMatcher(options: TuiSchema): void {
    updateTuiMatcher(options);
    renameTuiTypedMatcher(options);

    !options['skip-logs'] && titleLog(`${FINISH_SYMBOL} successfully migrated \n`);
}
