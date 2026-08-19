import {type CallExpression, Node, type ObjectLiteralExpression} from 'ng-morph';

import {isServiceMethodCall} from '../../../../utils/is-service-method-call';

// Exported: reused by migrate-dialog-legacy-sizes to move these imports to legacy.
export const TUI_DIALOG_FACTORY = 'tuiDialog';
export const TUI_DIALOG_SERVICE = 'TuiDialogService';
export const TUI_DIALOG_OPTIONS_PROVIDER = 'tuiDialogOptionsProvider';

// Internal — only the method name checked on TuiDialogService.
const TUI_DIALOG_OPEN_METHOD = 'open';

/**
 * Returns the dialog options object literal for a call, or `undefined` when the call is
 * not a recognized dialog entry point. Covers `tuiDialog(component, options)`,
 * `TuiDialogService.open(content, options)` and `tuiDialogOptionsProvider(options)`.
 */
export function getDialogOptions(
    call: CallExpression,
): ObjectLiteralExpression | undefined {
    const isFactory = call.getExpression().getText() === TUI_DIALOG_FACTORY;
    const isProvider = call.getExpression().getText() === TUI_DIALOG_OPTIONS_PROVIDER;

    const isMethod = isServiceMethodCall(
        call,
        TUI_DIALOG_SERVICE,
        TUI_DIALOG_OPEN_METHOD,
    );

    if (!isFactory && !isProvider && !isMethod) {
        return undefined;
    }

    const options = isProvider ? call.getArguments()[0] : call.getArguments()[1];

    return options && Node.isObjectLiteralExpression(options) ? options : undefined;
}
