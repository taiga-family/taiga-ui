import {InjectionToken, ValueProvider} from '@angular/core';
import {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {TuiAppearance} from '@taiga-ui/core/enums';
import {TuiSizeL} from '@taiga-ui/core/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiCheckboxOptions {
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
export const TUI_CHECKBOX_DEFAULT_OPTIONS: TuiCheckboxOptions = {
    size: `m`,
    appearances: {
        unchecked: TuiAppearance.Outline,
        checked: TuiAppearance.Primary,
        indeterminate: TuiAppearance.Primary,
    },
    icons: {
        checked({$implicit}: TuiContextWithImplicit<TuiSizeL>): string {
            return $implicit === `m` ? `tuiIconCheck` : `tuiIconCheckLarge`;
        },
        indeterminate({$implicit}: TuiContextWithImplicit<TuiSizeL>): string {
            return $implicit === `m` ? `tuiIconMinus` : `tuiIconMinusLarge`;
        },
    },
};

export const TUI_CHECKBOX_OPTIONS = new InjectionToken<TuiCheckboxOptions>(
    `Default parameters for checkbox component`,
    {
        factory: () => TUI_CHECKBOX_DEFAULT_OPTIONS,
    },
);

export const tuiCheckboxOptionsProvider: (
    options: Partial<TuiCheckboxOptions>,
) => ValueProvider = (options: Partial<TuiCheckboxOptions>) => ({
    provide: TUI_CHECKBOX_OPTIONS,
    useValue: {...TUI_CHECKBOX_DEFAULT_OPTIONS, ...options},
});
