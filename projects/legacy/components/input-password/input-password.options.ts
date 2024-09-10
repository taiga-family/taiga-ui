import type {Provider} from '@angular/core';
import type {TuiContext} from '@taiga-ui/cdk/types';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

/**
 * @deprecated use {@link TuiPassword} with {@link TuiTextfield}
 */
export interface TuiInputPasswordOptions {
    readonly icons: Readonly<{
        hide: PolymorpheusContent<TuiContext<TuiSizeL | TuiSizeS>>;
        show: PolymorpheusContent<TuiContext<TuiSizeL | TuiSizeS>>;
    }>;
}

/**
 * @deprecated use {@link TuiPassword} with {@link TuiTextfield}
 */
export const TUI_INPUT_PASSWORD_DEFAULT_OPTIONS: TuiInputPasswordOptions = {
    icons: {
        hide: () => '@tui.eye',
        show: () => '@tui.eye-off',
    },
};

/**
 * @deprecated use {@link TuiPassword} with {@link TuiTextfield}
 */
export const TUI_INPUT_PASSWORD_OPTIONS = tuiCreateToken(
    TUI_INPUT_PASSWORD_DEFAULT_OPTIONS,
);

/**
 * @deprecated use {@link TuiPassword} with {@link TuiTextfield}
 */
export function tuiInputPasswordOptionsProvider(
    options: Partial<TuiInputPasswordOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_INPUT_PASSWORD_OPTIONS,
        options,
        TUI_INPUT_PASSWORD_DEFAULT_OPTIONS,
    );
}
