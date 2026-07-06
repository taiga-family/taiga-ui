import {type CallExpression, Node, type ObjectLiteralExpression} from 'ng-morph';

import {isServiceMethodCall} from '../../../../utils/is-service-method-call';

export const TUI_DIALOG_FACTORY = 'tuiDialog';
export const TUI_DIALOG_SERVICE = 'TuiDialogService';
export const TUI_DIALOG_OPEN_METHOD = 'open';
export const TUI_DIALOG_OPTIONS_PROVIDER = 'tuiDialogOptionsProvider';

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
