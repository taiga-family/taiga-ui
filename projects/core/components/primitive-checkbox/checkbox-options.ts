import {InjectionToken} from '@angular/core';
import {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {TuiAppearance} from '@taiga-ui/core/enums';
import {TuiSizeL} from '@taiga-ui/core/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface CheckboxOptions {
    readonly size: TuiSizeL;
    readonly appearances: Readonly<{
        unchecked: string;
        checked: string;
        indeterminate: string;
    }>;
    readonly icons: Readonly<{
        checked: PolymorpheusContent<TuiContextWithImplicit<TuiSizeL>>;
        indeterminate: PolymorpheusContent<TuiContextWithImplicit<TuiSizeL>>;
    }>;
}

/** Default values for the checkbox options. */
export const TUI_CHECKBOX_DEFAULT_OPTIONS: CheckboxOptions = {
    size: 'm',
    appearances: {
        unchecked: TuiAppearance.Outline,
        checked: TuiAppearance.Primary,
        indeterminate: TuiAppearance.Primary,
    },
    icons: {
        checked: ({$implicit}) =>
            $implicit === 'm' ? 'tuiIconCheck' : 'tuiIconCheckLarge',
        indeterminate: ({$implicit}) =>
            $implicit === 'm' ? 'tuiIconMinus' : 'tuiIconMinusLarge',
    },
};

export const TUI_CHECKBOX_OPTIONS = new InjectionToken<CheckboxOptions>(
    'Default parameters for checkbox component',
    {
        factory: () => TUI_CHECKBOX_DEFAULT_OPTIONS,
    },
);
