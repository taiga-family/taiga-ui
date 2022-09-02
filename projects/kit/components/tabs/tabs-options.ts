import type {ValueProvider} from '@angular/core';
import {InjectionToken} from '@angular/core';

export interface TuiTabsOptions {
    readonly underline: boolean;
    readonly exposeActive: boolean;
    readonly itemsLimit: number;
}

export const TUI_TABS_DEFAULT_OPTIONS: TuiTabsOptions = {
    underline: true,
    exposeActive: true,
    itemsLimit: Infinity,
};

export const TUI_TABS_OPTIONS = new InjectionToken<TuiTabsOptions>(
    `Default parameters for tabs component`,
    {
        factory: () => TUI_TABS_DEFAULT_OPTIONS,
    },
);

export const tuiTabsOptionsProvider: (
    options: Partial<TuiTabsOptions>,
) => ValueProvider = (options: Partial<TuiTabsOptions>) => ({
    provide: TUI_TABS_OPTIONS,
    useValue: {...TUI_TABS_DEFAULT_OPTIONS, ...options},
});
