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

// TODO: remove in ivy compilation
export const PASSWORD_ICON_HIDE = ({$implicit}: any) =>
    $implicit === 's' ? 'tuiIconEyeClosed' : 'tuiIconHideLarge';
export const PASSWORD_ICON_SHOW = ({$implicit}: any) =>
    $implicit === 's' ? 'tuiIconEyeOpen' : 'tuiIconShowLarge';

/** Default values for the input password options. */
export const TUI_INPUT_PASSWORD_DEFAULT_OPTIONS: InputPasswordOptions = {
    icons: {
        hide: PASSWORD_ICON_HIDE,
        show: PASSWORD_ICON_SHOW,
    },
};

export const TUI_INPUT_PASSWORD_OPTIONS = new InjectionToken<InputPasswordOptions>(
    'Default parameters for input password component',
    {
        factory: () => TUI_INPUT_PASSWORD_DEFAULT_OPTIONS,
    },
);
