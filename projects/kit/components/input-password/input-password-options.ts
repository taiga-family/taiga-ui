import {InjectionToken} from '@angular/core';
import {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface InputPasswordOptions {
    readonly icons: Readonly<{
        hide: PolymorpheusContent<TuiContextWithImplicit<TuiSizeS | TuiSizeL>>;
        show: PolymorpheusContent<TuiContextWithImplicit<TuiSizeS | TuiSizeL>>;
    }>;
}

/** Default values for the input password options. */
export const TUI_INPUT_PASSWORD_DEFAULT_OPTIONS: InputPasswordOptions = {
    icons: {
        hide: ({$implicit}) =>
            $implicit === 's' ? 'tuiIconEyeClosed' : 'tuiIconHideLarge',
        show: ({$implicit}) =>
            $implicit === 's' ? 'tuiIconEyeOpen' : 'tuiIconShowLarge',
    },
};

export const TUI_INPUT_PASSWORD_OPTIONS = new InjectionToken<InputPasswordOptions>(
    'Default parameters for input password component',
    {
        factory: () => TUI_INPUT_PASSWORD_DEFAULT_OPTIONS,
    },
);
