import {InjectionToken, ValueProvider} from '@angular/core';
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

export const TUI_BREADCRUMBS_OPTIONS = new InjectionToken<TuiBreadcrumbsOptions>(
    `[TUI_BREADCRUMBS_OPTIONS]`,
    {
        factory: () => TUI_BREADCRUMBS_DEFAULT_OPTIONS,
    },
);

export const tuiBreadcrumbsOptionsProvider: (
    options: Partial<TuiBreadcrumbsOptions>,
) => ValueProvider = (options: Partial<TuiBreadcrumbsOptions>) => ({
    provide: TUI_BREADCRUMBS_OPTIONS,
    useValue: {...TUI_BREADCRUMBS_DEFAULT_OPTIONS, ...options},
});
