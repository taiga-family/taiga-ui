import type {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';

export interface TuiMobileDialogOptions<I = undefined> {
    readonly actions: readonly string[];
    readonly data: I;
    readonly label: string;
}

export const TUI_MOBILE_DIALOG_DEFAULT_OPTIONS: TuiMobileDialogOptions = {
    label: '',
    actions: ['OK'],
    data: undefined,
};

/**
 * Default parameters for mobile dialog component
 */
export const TUI_MOBILE_DIALOG_OPTIONS = tuiCreateToken(
    TUI_MOBILE_DIALOG_DEFAULT_OPTIONS,
);

export function tuiMobileDialogOptionsProvider(
    options: Partial<TuiMobileDialogOptions<unknown>>,
): Provider {
    return tuiProvideOptions(
        TUI_MOBILE_DIALOG_OPTIONS,
        options,
        TUI_MOBILE_DIALOG_DEFAULT_OPTIONS,
    );
}
