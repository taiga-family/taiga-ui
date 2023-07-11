import {Provider} from '@angular/core';
import {tuiCreateOptions, tuiProvideOptions} from '@taiga-ui/cdk';
import {TuiBrightness, TuiSizeL} from '@taiga-ui/core';

export interface TuiBreadcrumbsOptions {
    readonly icon: string;
    readonly size: TuiSizeL;
    readonly mode: TuiBrightness | null;
}

export const TUI_BREADCRUMBS_DEFAULT_OPTIONS: TuiBreadcrumbsOptions = {
    icon: `tuiIconChevronRight`,
    size: `m`,
    mode: `onLight`,
};

export const TUI_BREADCRUMBS_OPTIONS = tuiCreateOptions(TUI_BREADCRUMBS_DEFAULT_OPTIONS);

export function tuiBreadcrumbsOptionsProvider(
    options: Partial<TuiBreadcrumbsOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_BREADCRUMBS_OPTIONS,
        options,
        TUI_BREADCRUMBS_DEFAULT_OPTIONS,
    );
}
