import type {Provider} from '@angular/core';
import type {TuiContext} from '@taiga-ui/cdk/types';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {InjectionToken} from '@angular/core';

export interface TuiMultiSelectOptions<T> {
    readonly rows: number;
    readonly valueContent: PolymorpheusContent<TuiContext<readonly T[]>>;
}

export const TUI_MULTI_SELECT_DEFAULT_OPTIONS: TuiMultiSelectOptions<unknown> = {
    rows: Infinity,
    valueContent: '',
};

/**
 * @deprecated: drop in v5.0
 * Default parameters for MultiSelect component
 */
export const TUI_MULTI_SELECT_OPTIONS = new InjectionToken('TUI_MULTI_SELECT_OPTIONS', {
    factory: () => TUI_MULTI_SELECT_DEFAULT_OPTIONS,
});

export function tuiMultiSelectOptionsProvider<T>(
    options: Partial<TuiMultiSelectOptions<T>>,
): Provider {
    return tuiProvideOptions(
        TUI_MULTI_SELECT_OPTIONS,
        options,
        TUI_MULTI_SELECT_DEFAULT_OPTIONS,
    );
}
