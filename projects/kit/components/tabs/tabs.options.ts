import {Provider} from '@angular/core';
import {tuiCreateOptions, tuiProvideOptions} from '@taiga-ui/cdk';

export interface TuiTabsOptions {
    readonly underline: boolean;
    readonly exposeActive: boolean;
    readonly itemsLimit: number;
    readonly minMoreWidth: number;
}

export const TUI_TABS_DEFAULT_OPTIONS: TuiTabsOptions = {
    underline: true,
    exposeActive: true,
    itemsLimit: Infinity,
    minMoreWidth: 0,
};

/**
 * Default parameters for Tabs component
 */
export const TUI_TABS_OPTIONS = tuiCreateOptions(TUI_TABS_DEFAULT_OPTIONS);

export function tuiTabsOptionsProvider(options: Partial<TuiTabsOptions>): Provider {
    return tuiProvideOptions(TUI_TABS_OPTIONS, options, TUI_TABS_DEFAULT_OPTIONS);
}
