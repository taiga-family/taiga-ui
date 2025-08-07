import {InjectionToken, type Provider} from '@angular/core';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
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

export const TUI_BREADCRUMBS_OPTIONS = new InjectionToken(
    ngDevMode ? 'TUI_BREADCRUMBS_OPTIONS' : '',
    {
        factory: () => TUI_BREADCRUMBS_DEFAULT_OPTIONS,
    },
);

export function tuiBreadcrumbsOptionsProvider(
    options: Partial<TuiBreadcrumbsOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_BREADCRUMBS_OPTIONS,
        options,
        TUI_BREADCRUMBS_DEFAULT_OPTIONS,
    );
}
