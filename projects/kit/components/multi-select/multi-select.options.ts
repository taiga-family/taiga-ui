import {Provider} from '@angular/core';
import {TuiContextWithImplicit, tuiCreateOptions, tuiProvideOptions} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiMultiSelectOptions<T> {
    readonly expandable: boolean;
    readonly valueContent: PolymorpheusContent<TuiContextWithImplicit<readonly T[]>>;
}

export const TUI_MULTI_SELECT_DEFAULT_OPTIONS: TuiMultiSelectOptions<unknown> = {
    expandable: true,
    valueContent: ``,
};

/**
 * Default parameters for MultiSelect component
 */
export const TUI_MULTI_SELECT_OPTIONS = tuiCreateOptions(
    TUI_MULTI_SELECT_DEFAULT_OPTIONS,
);

export function tuiMultiSelectOptionsProvider<T>(
    options: Partial<TuiMultiSelectOptions<T>>,
): Provider {
    return tuiProvideOptions(
        TUI_MULTI_SELECT_OPTIONS,
        options,
        TUI_MULTI_SELECT_DEFAULT_OPTIONS,
    );
}
