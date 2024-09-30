import type {ImportSpecifier} from 'ng-morph';
import {
    FINISH_SYMBOL,
    infoLog,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    SyntaxKind,
    titleLog,
} from 'ng-morph';

import type {TuiSchema} from '../../../ng-add/schema';
import {addUniqueImport} from '../../../utils/add-unique-import';
import {getNamedImportReferences} from '../../../utils/get-named-import-references';
import {removeImport} from '../../../utils/import-manipulations';

export function migrateMonthContext(options: TuiSchema): void {
    !options['skip-logs'] &&
        infoLog(
            `${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} migrating TuiBooleanHandlerWithContext<TuiMonth, TuiMonthContext> ...`,
        );

    const monthContextRefs = getNamedImportReferences('TuiMonthContext', '@taiga-ui/kit');

    monthContextRefs
        .map((n) => n.getFirstAncestorByKind(SyntaxKind.TypeReference))
        .forEach((ref) => {
            if (!ref || ref.wasForgotten()) {
                return;
            }

            const booleanHandlerWithContext = ref.getFirstAncestor(
                (node) =>
                    node.isKind(SyntaxKind.TypeReference) &&
                    !!/TuiBooleanHandlerWithContext<\s*TuiMonth\s*,\s*TuiMonthContext\s*>/.exec(
                        node.getText(),
                    ),
            );

            if (!booleanHandlerWithContext) {
                return;
            }

            booleanHandlerWithContext.replaceWithText('TuiBooleanHandler<TuiMonth>');
            addUniqueImport(
                booleanHandlerWithContext.getSourceFile().getFilePath(),
                'TuiBooleanHandler',
                '@taiga-ui/cdk',
            );
        });

    [
        ...monthContextRefs,
        ...getNamedImportReferences('TuiBooleanHandlerWithContext', '@taiga-ui/kit'),
    ]
        .map(
            (node) =>
                !node.wasForgotten() &&
                node.getFirstAncestorByKind(SyntaxKind.ImportSpecifier),
        )
        .filter((x): x is ImportSpecifier => !!x)
        .forEach(removeImport);

    !options['skip-logs'] && titleLog(`${FINISH_SYMBOL} successfully migrated \n`);
}
