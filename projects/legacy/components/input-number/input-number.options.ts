import type {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';

/**
 * @deprecated use new version of {@link TuiInputNumberOptions} (from @taiga-ui/kit) instead
 * TODO(v5): delete it
 */
export interface TuiInputNumberOptions {
    readonly icons: Readonly<{
        down: string;
        up: string;
    }>;
    readonly max: number;
    readonly min: number;
    readonly step: number;
}

/**
 * @deprecated use new version of {@link TUI_INPUT_NUMBER_DEFAULT_OPTIONS} (from @taiga-ui/kit) instead
 * TODO(v5): delete it
 */
export const TUI_INPUT_NUMBER_DEFAULT_OPTIONS: TuiInputNumberOptions = {
    icons: {
        up: '@tui.plus',
        down: '@tui.minus',
    },
    min: Number.MIN_SAFE_INTEGER,
    max: Number.MAX_SAFE_INTEGER,
    step: 0,
};

/**
 * @deprecated use new version of {@link TUI_INPUT_NUMBER_OPTIONS} (from @taiga-ui/kit) instead
 * TODO(v5): delete it
 */
export const TUI_INPUT_NUMBER_OPTIONS = tuiCreateToken(TUI_INPUT_NUMBER_DEFAULT_OPTIONS);

/**
 * @deprecated use new version of {@link tuiInputNumberOptionsProvider} (from @taiga-ui/kit) instead
 * TODO(v5): delete it
 */
export function tuiInputNumberOptionsProvider(
    options: Partial<TuiInputNumberOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_INPUT_NUMBER_OPTIONS,
        options,
        TUI_INPUT_NUMBER_DEFAULT_OPTIONS,
    );
}
