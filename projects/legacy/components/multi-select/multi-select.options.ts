import type {Provider} from '@angular/core';
import type {TuiContext} from '@taiga-ui/cdk';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

export interface TuiMultiSelectOptions<T> {
    readonly rows: number;
    readonly valueContent: PolymorpheusContent<TuiContext<readonly T[]>>;
}

export const TUI_MULTI_SELECT_DEFAULT_OPTIONS: TuiMultiSelectOptions<unknown> = {
    rows: Infinity,
    valueContent: '',
};

/**
 * Default parameters for MultiSelect component
 */
export const TUI_MULTI_SELECT_OPTIONS = tuiCreateToken(TUI_MULTI_SELECT_DEFAULT_OPTIONS);

export function tuiMultiSelectOptionsProvider<T>(
    options: Partial<TuiMultiSelectOptions<T>>,
): Provider {
    return tuiProvideOptions(
        TUI_MULTI_SELECT_OPTIONS,
        options,
        TUI_MULTI_SELECT_DEFAULT_OPTIONS,
    );
}
