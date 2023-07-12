import {Provider} from '@angular/core';
import {TuiContextWithImplicit, tuiCreateOptions, tuiProvideOptions} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiInputPasswordOptions {
    readonly icons: Readonly<{
        hide: PolymorpheusContent<TuiContextWithImplicit<TuiSizeL | TuiSizeS>>;
        show: PolymorpheusContent<TuiContextWithImplicit<TuiSizeL | TuiSizeS>>;
    }>;
}

/** Default values for the input password options. */
export const TUI_INPUT_PASSWORD_DEFAULT_OPTIONS: TuiInputPasswordOptions = {
    icons: {
        hide: ({$implicit}) =>
            $implicit === `s` ? `tuiIconEyeOff` : `tuiIconEyeOffLarge`,
        show: ({$implicit}) => ($implicit === `s` ? `tuiIconEye` : `tuiIconEyeLarge`),
    },
};

/**
 * Default parameters for input password component
 */
export const TUI_INPUT_PASSWORD_OPTIONS = tuiCreateOptions(
    TUI_INPUT_PASSWORD_DEFAULT_OPTIONS,
);

export function tuiInputPasswordOptionsProvider(
    options: Partial<TuiInputPasswordOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_INPUT_PASSWORD_OPTIONS,
        options,
        TUI_INPUT_PASSWORD_DEFAULT_OPTIONS,
    );
}
