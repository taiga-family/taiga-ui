import {InjectionToken, ValueProvider} from '@angular/core';

import {TuiMobileDialogOptions} from './mobile-dialog-options';

type TuiMobileDialogDefaultOptions = Omit<TuiMobileDialogOptions<unknown>, 'data'>;

export const TUI_MOBILE_DIALOG_DEFAULT_OPTIONS: TuiMobileDialogDefaultOptions = {
    label: ``,
    actions: [`OK`],
};

export const TUI_MOBILE_DIALOG_OPTIONS =
    new InjectionToken<TuiMobileDialogDefaultOptions>(
        `[TUI_MOBILE_DIALOG_OPTIONS]: Default parameters for mobile dialog component`,
        {
            factory: () => TUI_MOBILE_DIALOG_DEFAULT_OPTIONS,
        },
    );

export function tuiMobileDialogOptionsProvider(
    options: Partial<TuiMobileDialogDefaultOptions>,
): ValueProvider {
    return {
        provide: TUI_MOBILE_DIALOG_OPTIONS,
        useValue: {...TUI_MOBILE_DIALOG_DEFAULT_OPTIONS, ...options},
    };
}
