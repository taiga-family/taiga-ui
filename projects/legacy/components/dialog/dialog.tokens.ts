import {InjectionToken, type Provider} from '@angular/core';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';

import {type TuiDialogOptions} from './dialog.interfaces';

export const TUI_DIALOG_DEFAULT_OPTIONS: TuiDialogOptions<void> = {
    appearance: '',
    size: 'm',
    required: false,
    closable: true,
    dismissible: true,
    label: '',
    header: '',
    data: undefined,
};

/**
 * Default parameters for dialog component
 */
export const TUI_DIALOG_OPTIONS = new InjectionToken(
    ngDevMode ? 'TUI_DIALOG_OPTIONS' : '',
    {
        factory: () => TUI_DIALOG_DEFAULT_OPTIONS,
    },
);

export function tuiDialogOptionsProvider(
    options: Partial<TuiDialogOptions<unknown>>,
): Provider {
    return tuiProvideOptions(TUI_DIALOG_OPTIONS, options, TUI_DIALOG_DEFAULT_OPTIONS);
}
