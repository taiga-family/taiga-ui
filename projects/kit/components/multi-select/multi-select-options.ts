import type {ValueProvider} from '@angular/core';
import {InjectionToken} from '@angular/core';
import type {TuiContextWithImplicit} from '@taiga-ui/cdk';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

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
export const TUI_MULTI_SELECT_OPTIONS = new InjectionToken<
    TuiMultiSelectOptions<unknown>
>(`[TUI_MULTI_SELECT_OPTIONS]`, {
    factory: () => TUI_MULTI_SELECT_DEFAULT_OPTIONS,
});

export const tuiMultiSelectOptionsProvider: <T>(
    options: Partial<TuiMultiSelectOptions<T>>,
) => ValueProvider = <T>(options: Partial<TuiMultiSelectOptions<T>>) => ({
    provide: TUI_MULTI_SELECT_OPTIONS,
    useValue: {...TUI_MULTI_SELECT_DEFAULT_OPTIONS, ...options},
});
