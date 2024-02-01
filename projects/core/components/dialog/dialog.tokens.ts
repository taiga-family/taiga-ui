import {Provider} from '@angular/core';
import {tuiCreateToken, TuiPopover, tuiProvideOptions} from '@taiga-ui/cdk';
import type {TuiDialogOptions} from '@taiga-ui/core/interfaces';
import {BehaviorSubject, EMPTY, Observable} from 'rxjs';

type TuiDialogDefaultOptions = Omit<TuiDialogOptions<unknown>, 'data'>;

export const TUI_DIALOGS = tuiCreateToken(
    new BehaviorSubject<ReadonlyArray<TuiPopover<any, any>>>([]),
);

export const TUI_DIALOG_DEFAULT_OPTIONS: TuiDialogDefaultOptions = {
    size: 'm',
    required: false,
    closeable: true,
    dismissible: true,
    label: '',
    header: '',
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
    options: Partial<TuiDialogDefaultOptions>,
): Provider {
    return tuiProvideOptions(TUI_DIALOG_OPTIONS, options, TUI_DIALOG_DEFAULT_OPTIONS);
}
