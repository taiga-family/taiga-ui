import {Provider} from '@angular/core';
import {tuiCreateOptions, tuiProvideOptions} from '@taiga-ui/cdk';
import {TuiValueContentContext} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiSelectOptions<T> {
    readonly valueContent: PolymorpheusContent<TuiValueContentContext<T>>;
}

export const TUI_SELECT_DEFAULT_OPTIONS: TuiSelectOptions<unknown> = {
    valueContent: ``,
};

/**
 * Default parameters for Select component
 */
export const TUI_SELECT_OPTIONS = tuiCreateOptions(TUI_SELECT_DEFAULT_OPTIONS);

export function tuiSelectOptionsProvider<T>(
    options: Partial<TuiSelectOptions<T>>,
): Provider {
    return tuiProvideOptions(TUI_SELECT_OPTIONS, options, TUI_SELECT_DEFAULT_OPTIONS);
}
