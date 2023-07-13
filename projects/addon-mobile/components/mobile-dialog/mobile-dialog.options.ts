import {Provider} from '@angular/core';
import {tuiCreateOptions, tuiProvideOptions} from '@taiga-ui/cdk';

import {TuiMobileDialogOptions} from './mobile-dialog-options';

type TuiMobileDialogDefaultOptions = Omit<TuiMobileDialogOptions<unknown>, 'data'>;

export const TUI_MOBILE_DIALOG_DEFAULT_OPTIONS: TuiMobileDialogDefaultOptions = {
    label: ``,
    actions: [`OK`],
};

/**
 * Default parameters for mobile dialog component
 */
export const TUI_MOBILE_DIALOG_OPTIONS = tuiCreateOptions(
    TUI_MOBILE_DIALOG_DEFAULT_OPTIONS,
);

export function tuiMobileDialogOptionsProvider(
    options: Partial<TuiMobileDialogDefaultOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_MOBILE_DIALOG_OPTIONS,
        options,
        TUI_MOBILE_DIALOG_DEFAULT_OPTIONS,
    );
}
