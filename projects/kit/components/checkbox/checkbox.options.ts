import type {Provider} from '@angular/core';
import type {TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiSizeS} from '@taiga-ui/core/types';

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
        checked: () => '@tui.check',
        indeterminate: () => '@tui.minus',
    },
};

export const TUI_CHECKBOX_OPTIONS = tuiCreateToken(TUI_CHECKBOX_DEFAULT_OPTIONS);

export function tuiCheckboxOptionsProvider(
    options: Partial<TuiCheckboxOptions>,
): Provider {
    return tuiProvideOptions(TUI_CHECKBOX_OPTIONS, options, TUI_CHECKBOX_DEFAULT_OPTIONS);
}
