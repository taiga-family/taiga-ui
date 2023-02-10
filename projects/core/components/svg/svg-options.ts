import {inject, InjectionToken, ValueProvider} from '@angular/core';
import {SafeHtml} from '@angular/platform-browser';
import {
    TuiHandler,
    tuiIsString,
    TuiStringHandler,
    tuiSvgLinearGradientProcessor,
} from '@taiga-ui/cdk';
import {
    TUI_ICONS_PATH,
    TUI_SVG_CONTENT_PROCESSOR,
    TUI_SVG_SRC_PROCESSOR,
} from '@taiga-ui/core/tokens';
import {tuiIconsPathFactory} from '@taiga-ui/core/utils';
import {identity} from 'rxjs';

export interface TuiSvgOptions {
    readonly path: TuiStringHandler<string>;
    readonly srcProcessor: TuiHandler<SafeHtml | string, SafeHtml | string>;
    readonly contentProcessor: TuiHandler<SafeHtml | string, SafeHtml | string>;
}

export const TUI_SVG_DEFAULT_OPTIONS: TuiSvgOptions = {
    path: tuiIconsPathFactory(`assets/taiga-ui/icons`),
    srcProcessor: identity,
    contentProcessor: tuiSvgLinearGradientProcessor,
};

export const TUI_SVG_OPTIONS = new InjectionToken(
    `[TUI_SVG_OPTIONS]: SVG component options`,
    {
        factory: () => ({
            path: inject(TUI_ICONS_PATH),
            srcProcessor: inject(TUI_SVG_SRC_PROCESSOR),
            contentProcessor: inject(TUI_SVG_CONTENT_PROCESSOR),
        }),
    },
);

export const tuiSvgOptionsProvider: (
    options: Partial<Omit<TuiSvgOptions, 'path'>> & {
        path?: TuiSvgOptions['path'] | string;
    },
) => ValueProvider = options => ({
    provide: TUI_SVG_OPTIONS,
    useValue: {
        ...TUI_SVG_DEFAULT_OPTIONS,
        ...options,
        path: tuiIsString(options.path)
            ? tuiIconsPathFactory(options.path)
            : options.path || TUI_SVG_DEFAULT_OPTIONS.path,
    },
});
