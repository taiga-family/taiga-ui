import type {Provider} from '@angular/core';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiSizeL} from '@taiga-ui/core/types';
import {InjectionToken} from '@angular/core';

export interface TuiTabsOptions {
    readonly exposeActive: boolean;
    readonly itemsLimit: number;
    readonly minMoreWidth: number;
    readonly underline: boolean | string;
    readonly size: TuiSizeL;
}

export const TUI_TABS_DEFAULT_OPTIONS: TuiTabsOptions = {
    underline: true,
    exposeActive: true,
    itemsLimit: Infinity,
    minMoreWidth: 0,
    size: 'l',
};

/**
 * Default parameters for Tabs component
 */
export const TUI_TABS_OPTIONS = new InjectionToken(ngDevMode ? 'TUI_TABS_OPTIONS' : '', {
    factory: () => TUI_TABS_DEFAULT_OPTIONS,
});

export function tuiTabsOptionsProvider(options: Partial<TuiTabsOptions>): Provider {
    return tuiProvideOptions(TUI_TABS_OPTIONS, options, TUI_TABS_DEFAULT_OPTIONS);
}
