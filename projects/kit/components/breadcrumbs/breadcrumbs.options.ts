import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type TuiSizeL} from '@taiga-ui/core/types';

export interface TuiBreadcrumbsOptions {
    readonly icon: string;
    readonly size: TuiSizeL;
    readonly itemsLimit: number;
}

export const TUI_BREADCRUMBS_DEFAULT_OPTIONS: TuiBreadcrumbsOptions = {
    icon: '@tui.chevron-right',
    size: 'm',
    itemsLimit: 0,
};

export const [TUI_BREADCRUMBS_OPTIONS, tuiBreadcrumbsOptionsProvider] = tuiCreateOptions(
    TUI_BREADCRUMBS_DEFAULT_OPTIONS,
);
