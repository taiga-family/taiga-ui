import {Provider} from '@angular/core';
import {TuiContextWithImplicit, tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import {TuiAppearance} from '@taiga-ui/core/enums';
import {TuiSizeL} from '@taiga-ui/core/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiCheckboxOptions {
    readonly appearances: Readonly<{
        checked: string;
        indeterminate: string;
        unchecked: string;
    }>;
    readonly icons: Readonly<{
        checked: PolymorpheusContent<TuiContextWithImplicit<TuiSizeL>>;
        indeterminate: PolymorpheusContent<TuiContextWithImplicit<TuiSizeL>>;
    }>;
    readonly size: TuiSizeL;
}

/** Default values for the checkbox options. */
export const TUI_CHECKBOX_DEFAULT_OPTIONS: TuiCheckboxOptions = {
    size: `m`,
    appearances: {
        unchecked: TuiAppearance.Outline,
        checked: TuiAppearance.Primary,
        indeterminate: TuiAppearance.Primary,
    },
    icons: {
        checked: ({$implicit}) =>
            $implicit === `m` ? `tuiIconCheck` : `tuiIconCheckLarge`,
        indeterminate: ({$implicit}) =>
            $implicit === `m` ? `tuiIconMinus` : `tuiIconMinusLarge`,
    },
};

/**
 * Default parameters for checkbox component
 */
export const TUI_CHECKBOX_OPTIONS = tuiCreateToken(TUI_CHECKBOX_DEFAULT_OPTIONS);

export function tuiCheckboxOptionsProvider(
    options: Partial<TuiCheckboxOptions>,
): Provider {
    return tuiProvideOptions(TUI_CHECKBOX_OPTIONS, options, TUI_CHECKBOX_DEFAULT_OPTIONS);
}
