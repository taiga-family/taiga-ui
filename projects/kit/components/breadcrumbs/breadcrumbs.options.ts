import type {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import type {TuiSizeL} from '@taiga-ui/core';

export interface TuiBreadcrumbsOptions {
    readonly icon: string;
    readonly size: TuiSizeL;
}

export const TUI_BREADCRUMBS_DEFAULT_OPTIONS: TuiBreadcrumbsOptions = {
    icon: 'tuiIconChevronRight',
    size: 'm',
};

export const TUI_BREADCRUMBS_OPTIONS = tuiCreateToken(TUI_BREADCRUMBS_DEFAULT_OPTIONS);

export function tuiBreadcrumbsOptionsProvider(
    options: Partial<TuiBreadcrumbsOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_BREADCRUMBS_OPTIONS,
        options,
        TUI_BREADCRUMBS_DEFAULT_OPTIONS,
    );
}
