import {InjectionToken, ValueProvider} from '@angular/core';
import {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiMultiSelectOptions<T> {
    readonly expandable: boolean;
    readonly valueContent: PolymorpheusContent<TuiContextWithImplicit<readonly T[]>>;
}

export const TUI_MULTI_SELECT_DEFAULT_OPTIONS: TuiMultiSelectOptions<unknown> = {
    expandable: true,
    valueContent: ``,
};

export const TUI_MULTI_SELECT_OPTIONS = new InjectionToken<
    TuiMultiSelectOptions<unknown>
>(`Default parameters for multi select component`, {
    factory: () => TUI_MULTI_SELECT_DEFAULT_OPTIONS,
});

export const tuiMultiSelectOptionsProvider: <T>(
    options: Partial<TuiMultiSelectOptions<T>>,
) => ValueProvider = <T>(options: Partial<TuiMultiSelectOptions<T>>) => ({
    provide: TUI_MULTI_SELECT_OPTIONS,
    useValue: {...TUI_MULTI_SELECT_DEFAULT_OPTIONS, ...options},
});
