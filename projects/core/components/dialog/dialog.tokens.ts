import {type Provider} from '@angular/core';
import {tuiCreateToken, type TuiPopover, tuiProvideOptions} from '@taiga-ui/cdk';
import {BehaviorSubject, EMPTY, type Observable} from 'rxjs';

import {type TuiDialogOptions} from './dialog.interfaces';

export const TUI_DIALOGS = tuiCreateToken(
    new BehaviorSubject<ReadonlyArray<TuiPopover<any, any>>>([]),
);

export const TUI_DIALOG_DEFAULT_OPTIONS: TuiDialogOptions = {
    appearance: '',
    size: 'm',
    required: false,
    closeable: true,
    dismissible: true,
    label: '',
    header: '',
    data: undefined,
};

/**
 * A stream to close dialogs
 */
export const TUI_DIALOGS_CLOSE = tuiCreateToken<Observable<unknown>>(EMPTY);

/**
 * Default parameters for dialog component
 */
export const TUI_DIALOG_OPTIONS = tuiCreateToken(TUI_DIALOG_DEFAULT_OPTIONS);

export function tuiDialogOptionsProvider(
    options: Partial<TuiDialogOptions<unknown>>,
): Provider {
    return tuiProvideOptions(TUI_DIALOG_OPTIONS, options, TUI_DIALOG_DEFAULT_OPTIONS);
}
