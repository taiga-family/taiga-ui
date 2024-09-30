import {infoLog, Node, REPLACE_SYMBOL, SMALL_TAB_SYMBOL} from 'ng-morph';

import type {TuiSchema} from '../../../ng-add/schema';
import {getNamedImportReferences} from '../../../utils/get-named-import-references';

export function migrateImportProvidersFrom(options: TuiSchema): void {
    !options['skip-logs'] &&
        infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} updating importProvidersFrom`);

    const refs = [
        ...getNamedImportReferences('TuiDialogModule', '@taiga-ui/core'),
        ...getNamedImportReferences('TuiAlertModule', '@taiga-ui/core'),
        ...getNamedImportReferences('TuiPushModule', '@taiga-ui/kit'),
        ...getNamedImportReferences('TuiPdfViewerModule', '@taiga-ui/kit'),
        ...getNamedImportReferences('TuiPreviewModule', '@taiga-ui/addon-preview'),
    ];

    for (const ref of refs) {
        if (ref.wasForgotten()) {
            return;
        }

        const callExpression = ref.getParentWhile(Node.isCallExpression);

        if (callExpression?.getExpression().getText() === 'importProvidersFrom') {
            const node = callExpression
                .getArguments()
                .find((arg) => arg.getText() === ref.getText());

            if (node) {
                callExpression.removeArgument(node);
            }
        }
    }
}
