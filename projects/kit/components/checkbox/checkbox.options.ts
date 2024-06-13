import type {Provider} from '@angular/core';
import type {TuiStringHandler} from '@taiga-ui/cdk';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import type {TuiSizeS} from '@taiga-ui/core';

export interface TuiCheckboxOptions {
    readonly size: TuiSizeS;
    readonly appearance: TuiStringHandler<HTMLInputElement>;
    readonly icons: Readonly<{
        checked: TuiStringHandler<TuiSizeS> | string;
        indeterminate: TuiStringHandler<TuiSizeS> | string;
    }>;
}

export const TUI_CHECKBOX_DEFAULT_OPTIONS: TuiCheckboxOptions = {
    size: 'm',
    appearance: el => (el.checked || el.indeterminate ? 'primary' : 'whiteblock'),
    icons: {
        checked: () => 'tuiIconCheck',
        indeterminate: () => 'tuiIconMinus',
    },
};

export const TUI_CHECKBOX_OPTIONS = tuiCreateToken(TUI_CHECKBOX_DEFAULT_OPTIONS);

export function tuiCheckboxOptionsProvider(
    options: Partial<TuiCheckboxOptions>,
): Provider {
    return tuiProvideOptions(TUI_CHECKBOX_OPTIONS, options, TUI_CHECKBOX_DEFAULT_OPTIONS);
}
