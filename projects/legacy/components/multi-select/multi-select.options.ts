import type {Provider} from '@angular/core';
import type {TuiContext} from '@taiga-ui/cdk/types';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

/**
 * @deprecated: drop in v5.0
 */
export interface TuiMultiSelectOptions<T> {
    readonly rows: number;
    readonly valueContent: PolymorpheusContent<TuiContext<readonly T[]>>;
}

/**
 * @deprecated: drop in v5.0
 */
export const TUI_MULTI_SELECT_DEFAULT_OPTIONS: TuiMultiSelectOptions<unknown> = {
    rows: Infinity,
    valueContent: '',
};

/**
 * @deprecated: drop in v5.0
 * Default parameters for MultiSelect component
 */
export const TUI_MULTI_SELECT_OPTIONS = tuiCreateToken(TUI_MULTI_SELECT_DEFAULT_OPTIONS);

/**
 * @deprecated: drop in v5.0
 */
export function tuiMultiSelectOptionsProvider<T>(
    options: Partial<TuiMultiSelectOptions<T>>,
): Provider {
    return tuiProvideOptions(
        TUI_MULTI_SELECT_OPTIONS,
        options,
        TUI_MULTI_SELECT_DEFAULT_OPTIONS,
    );
}
