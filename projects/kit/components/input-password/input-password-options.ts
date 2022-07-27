import {InjectionToken, ValueProvider} from '@angular/core';
import {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiInputPasswordOptions {
    readonly icons: Readonly<{
        hide: PolymorpheusContent<TuiContextWithImplicit<TuiSizeS | TuiSizeL>>;
        show: PolymorpheusContent<TuiContextWithImplicit<TuiSizeS | TuiSizeL>>;
    }>;
}

/**
 * @deprecated: use TuiInputPasswordOptions instead
 * todo: remove in 3.0
 */
export type InputPasswordOptions = TuiInputPasswordOptions;

// TODO: 3.0 remove in ivy compilation
export const PASSWORD_ICON_HIDE = ({
    $implicit,
}: TuiContextWithImplicit<TuiSizeS | TuiSizeL>):
    | 'tuiIconEyeClosed'
    | 'tuiIconHideLarge' => ($implicit === `s` ? `tuiIconEyeClosed` : `tuiIconHideLarge`);

export const PASSWORD_ICON_SHOW = ({
    $implicit,
}: TuiContextWithImplicit<TuiSizeS | TuiSizeL>): 'tuiIconEyeOpen' | 'tuiIconShowLarge' =>
    $implicit === `s` ? `tuiIconEyeOpen` : `tuiIconShowLarge`;

/** Default values for the input password options. */
export const TUI_INPUT_PASSWORD_DEFAULT_OPTIONS: TuiInputPasswordOptions = {
    icons: {
        hide: PASSWORD_ICON_HIDE,
        show: PASSWORD_ICON_SHOW,
    },
};

export const TUI_INPUT_PASSWORD_OPTIONS = new InjectionToken<TuiInputPasswordOptions>(
    `Default parameters for input password component`,
    {
        factory: () => TUI_INPUT_PASSWORD_DEFAULT_OPTIONS,
    },
);

export const tuiInputPasswordOptionsProvider: (
    options: Partial<TuiInputPasswordOptions>,
) => ValueProvider = (options: Partial<TuiInputPasswordOptions>) => ({
    provide: TUI_INPUT_PASSWORD_OPTIONS,
    useValue: {...TUI_INPUT_PASSWORD_DEFAULT_OPTIONS, ...options},
});
