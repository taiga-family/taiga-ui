import type {Provider} from '@angular/core';
import type {TuiContext} from '@taiga-ui/cdk/types';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

export interface TuiInputPasswordOptions {
    readonly icons: Readonly<{
        hide: PolymorpheusContent<TuiContext<TuiSizeL | TuiSizeS>>;
        show: PolymorpheusContent<TuiContext<TuiSizeL | TuiSizeS>>;
    }>;
}

export const TUI_INPUT_PASSWORD_DEFAULT_OPTIONS: TuiInputPasswordOptions = {
    icons: {
        hide: () => '@tui.eye',
        show: () => '@tui.eye-off',
    },
};

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
