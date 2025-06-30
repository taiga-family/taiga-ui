import type {Provider} from '@angular/core';
import type {TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import {InjectionToken} from '@angular/core';

/**
 * @deprecated use {@link TuiPassword} with {@link TuiTextfield}
 */
export interface TuiInputPasswordOptions {
    readonly icons: Readonly<{
        hide: TuiStringHandler<TuiSizeL | TuiSizeS> | string;
        show: TuiStringHandler<TuiSizeL | TuiSizeS> | string;
    }>;
}

/**
 * @deprecated use {@link TuiPassword} with {@link TuiTextfield}
 */
export const TUI_INPUT_PASSWORD_DEFAULT_OPTIONS: TuiInputPasswordOptions = {
    icons: {
        hide: '@tui.eye-off',
        show: '@tui.eye',
    },
};

/**
 * @deprecated use {@link TuiPassword} with {@link TuiTextfield}
 */
export const TUI_INPUT_PASSWORD_OPTIONS = new InjectionToken(
    'TUI_INPUT_PASSWORD_OPTIONS',
    {
        factory: () => TUI_INPUT_PASSWORD_DEFAULT_OPTIONS,
    },
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
