import type {ValueProvider} from '@angular/core';
import {InjectionToken} from '@angular/core';
import type {TuiValueContentContext} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiSelectOptions<T> {
    readonly valueContent: PolymorpheusContent<TuiValueContentContext<T>>;
}

export const TUI_SELECT_DEFAULT_OPTIONS: TuiSelectOptions<unknown> = {
    valueContent: ``,
};

export const TUI_SELECT_OPTIONS = new InjectionToken<TuiSelectOptions<unknown>>(
    `Default parameters for select component`,
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
