import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type TuiSizeL} from '@taiga-ui/core/types';

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

export const [TUI_TABS_OPTIONS, tuiTabsOptionsProvider] = tuiCreateOptions(
    TUI_TABS_DEFAULT_OPTIONS,
);
