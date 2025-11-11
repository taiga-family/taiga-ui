import {InjectionToken, type Provider} from '@angular/core';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';

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
export const TUI_MOBILE_DIALOG_OPTIONS = new InjectionToken(
    ngDevMode ? 'TUI_MOBILE_DIALOG_OPTIONS' : '',
    {
        factory: () => TUI_MOBILE_DIALOG_DEFAULT_OPTIONS,
    },
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
