import type {ValueProvider} from '@angular/core';
import {InjectionToken} from '@angular/core';

import type {TuiMobileDialogOptions} from './mobile-dialog-options';

type TuiMobileDialogDefaultOptions = Omit<TuiMobileDialogOptions<unknown>, 'data'>;

export const TUI_MOBILE_DIALOG_DEFAULT_OPTIONS: TuiMobileDialogDefaultOptions = {
    label: ``,
    actions: [`OK`],
};

/**
 * Default parameters for mobile dialog component
 */
export const TUI_MOBILE_DIALOG_OPTIONS =
    new InjectionToken<TuiMobileDialogDefaultOptions>(`[TUI_MOBILE_DIALOG_OPTIONS]`, {
        factory: () => TUI_MOBILE_DIALOG_DEFAULT_OPTIONS,
    });

export function tuiMobileDialogOptionsProvider(
    options: Partial<TuiMobileDialogDefaultOptions>,
): ValueProvider {
    return {
        provide: TUI_MOBILE_DIALOG_OPTIONS,
        useValue: {...TUI_MOBILE_DIALOG_DEFAULT_OPTIONS, ...options},
    };
}
