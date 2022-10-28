import {InjectionToken, ValueProvider} from '@angular/core';
import type {TuiDialogOptions} from '@taiga-ui/core/interfaces';

type TuiDialogDefaultOptions = Omit<TuiDialogOptions<unknown>, 'data'>;

export const TUI_DIALOG_DEFAULT_OPTIONS: TuiDialogDefaultOptions = {
    size: `m`,
    required: false,
    closeable: true,
    dismissible: true,
    label: ``,
    header: ``,
};

export const TUI_DIALOG_OPTIONS = new InjectionToken<TuiDialogDefaultOptions>(
    `[TUI_DIALOG_OPTIONS]: Default parameters for dialog component`,
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
