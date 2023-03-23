import type {ValueProvider} from '@angular/core';
import {InjectionToken} from '@angular/core';
import type {TuiDialogOptions} from '@taiga-ui/core/interfaces';
import type {Observable} from 'rxjs';
import {EMPTY} from 'rxjs';

type TuiDialogDefaultOptions = Omit<TuiDialogOptions<unknown>, 'data'>;

export const TUI_DIALOG_DEFAULT_OPTIONS: TuiDialogDefaultOptions = {
    size: `m`,
    required: false,
    closeable: true,
    dismissible: true,
    label: ``,
    header: ``,
};

/**
 * A stream to close dialogs
 */
export const TUI_DIALOGS_CLOSE = new InjectionToken<Observable<unknown>>(
    `[TUI_DIALOGS_CLOSE]`,
    {
        factory: () => EMPTY,
    },
);

/**
 * Default parameters for dialog component
 */
export const TUI_DIALOG_OPTIONS = new InjectionToken<TuiDialogDefaultOptions>(
    `[TUI_DIALOG_OPTIONS]`,
    {
        factory: () => TUI_DIALOG_DEFAULT_OPTIONS,
    },
);

export function tuiDialogOptionsProvider(
    options: Partial<TuiDialogDefaultOptions>,
): ValueProvider {
    return {
        provide: TUI_DIALOG_OPTIONS,
        useValue: {...TUI_DIALOG_DEFAULT_OPTIONS, ...options},
    };
}
