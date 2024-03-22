import type {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import type {TuiSizeL} from '@taiga-ui/core';

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
export const TUI_TABS_OPTIONS = tuiCreateToken(TUI_TABS_DEFAULT_OPTIONS);

export function tuiTabsOptionsProvider(options: Partial<TuiTabsOptions>): Provider {
    return tuiProvideOptions(TUI_TABS_OPTIONS, options, TUI_TABS_DEFAULT_OPTIONS);
}
