import {InjectionToken, ValueProvider} from '@angular/core';
import {TuiValueContentContext} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiSelectOptions<T> {
    readonly valueContent: PolymorpheusContent<TuiValueContentContext<T>>;
}

export const TUI_SELECT_DEFAULT_OPTIONS: TuiSelectOptions<unknown> = {
    valueContent: ``,
};

export const TUI_SELECT_OPTIONS = new InjectionToken<TuiSelectOptions<unknown>>(
    `[TUI_SELECT_OPTIONS]: Default parameters for select component`,
    {
        factory: () => TUI_SELECT_DEFAULT_OPTIONS,
    },
);

export const tuiSelectOptionsProvider: <T>(
    options: Partial<TuiSelectOptions<T>>,
) => ValueProvider = <T>(options: Partial<TuiSelectOptions<T>>) => ({
    provide: TUI_SELECT_OPTIONS,
    useValue: {...TUI_SELECT_DEFAULT_OPTIONS, ...options},
});
