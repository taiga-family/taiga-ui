import type {ObjectLiteralElementLike} from 'ng-morph';
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
import {insertTodo} from '../../../utils/insert-todo';

export function migrateOptionProviders(options: TuiSchema): void {
    !options['skip-logs'] &&
        infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} migrating providers...`);

    migrateInputNumberOptions(options);

    !options['skip-logs'] && titleLog(`${FINISH_SYMBOL} successfully migrated \n`);
}

function migrateInputNumberOptions(options: TuiSchema): void {
    !options['skip-logs'] &&
        infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} tuiInputNumberOptionsProvider`);

    const references = [
        ...getNamedImportReferences('tuiInputNumberOptionsProvider', '@taiga-ui/kit'),
        ...getNamedImportReferences('tuiInputNumberOptionsProvider', '@taiga-ui/legacy'),
    ];

    references.forEach(ref => {
        if (ref.wasForgotten()) {
            return;
        }

        const parent = ref.getParent();

        if (!Node.isCallExpression(parent)) {
            return;
        }

        const [value] = parent.getArguments();

        if (Node.isObjectLiteralExpression(value)) {
            const precision = value.getProperty('precision');
            const decimal = value.getProperty('decimal');

            [precision, decimal]
                .filter((property): property is ObjectLiteralElementLike => !!property)
                .forEach(property => property.remove());

            if (precision || decimal) {
                insertTodo(
                    parent,
                    '"precision" and "decimal" options have been moved to FormatNumberOptions. See https://taiga-ui.dev/components/input-number#options',
                );
            }
        }
    });
}
