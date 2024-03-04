import {type Provider} from '@angular/core';
import {type TuiContext, tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core';
import {type PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiInputPasswordOptions {
    readonly icons: Readonly<{
        hide: PolymorpheusContent<TuiContext<TuiSizeL | TuiSizeS>>;
        show: PolymorpheusContent<TuiContext<TuiSizeL | TuiSizeS>>;
    }>;
}

// TODO: swap icon names in v4.0
/** Default values for the input password options. */
export const TUI_INPUT_PASSWORD_DEFAULT_OPTIONS: TuiInputPasswordOptions = {
    icons: {
        hide: ({$implicit}) =>
            $implicit === 's' ? 'tuiIconEyeOff' : 'tuiIconEyeOffLarge',
        show: ({$implicit}) => ($implicit === 's' ? 'tuiIconEye' : 'tuiIconEyeLarge'),
    },
};

/**
 * Default parameters for input password component
 */
export const TUI_INPUT_PASSWORD_OPTIONS = tuiCreateToken(
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
