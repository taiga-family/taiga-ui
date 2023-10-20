import {Provider} from '@angular/core';
import {tuiCreateToken, TuiMapper, tuiProvideOptions} from '@taiga-ui/cdk';
import {TuiSizeS} from '@taiga-ui/core';

export interface TuiCheckboxOptions {
    readonly size: TuiSizeS;
    readonly icons: Readonly<{
        checked: TuiMapper<[TuiSizeS], string> | string;
        indeterminate: TuiMapper<[TuiSizeS], string> | string;
    }>;
}

export const TUI_CHECKBOX_DEFAULT_OPTIONS: TuiCheckboxOptions = {
    size: `m`,
    icons: {
        checked: size => (size === `m` ? `tuiIconCheckLarge` : `tuiIconCheck`),
        indeterminate: size => (size === `m` ? `tuiIconMinusLarge` : `tuiIconMinus`),
    },
};

export const TUI_CHECKBOX_OPTIONS = tuiCreateToken(TUI_CHECKBOX_DEFAULT_OPTIONS);

export function tuiCheckboxOptionsProvider(
    options: Partial<TuiCheckboxOptions>,
): Provider {
    return tuiProvideOptions(TUI_CHECKBOX_OPTIONS, options, TUI_CHECKBOX_DEFAULT_OPTIONS);
}
