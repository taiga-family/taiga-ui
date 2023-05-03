import {FactoryProvider, inject, InjectionToken, Optional, SkipSelf} from '@angular/core';
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

import {TUI_DEPRECATED_ICONS} from './deprecated-icons';

export interface TuiSvgOptions {
    readonly path: TuiStringHandler<string>;
    readonly deprecated: TuiStringHandler<string>;
    readonly srcProcessor: TuiHandler<SafeHtml | string, SafeHtml | string>;
    readonly contentProcessor: TuiHandler<SafeHtml | string, SafeHtml | string>;
}

export const TUI_SVG_DEFAULT_OPTIONS: TuiSvgOptions = {
    path: tuiIconsPathFactory(`assets/taiga-ui/icons`),
    srcProcessor: identity,
    contentProcessor: tuiSvgLinearGradientProcessor,
    deprecated: src =>
        TUI_DEPRECATED_ICONS[src.replace(`Large`, ``).replace(`Outline`, ``)]
            ? `${src} is deprecated, use ${
                  TUI_DEPRECATED_ICONS[src.replace(`Large`, ``)]
              }/Large instead`
            : ``,
};

/**
 * SVG component options
 */
export const TUI_SVG_OPTIONS = new InjectionToken<TuiSvgOptions>(`[TUI_SVG_OPTIONS]`, {
    factory: () => ({
        path: inject(TUI_ICONS_PATH),
        deprecated: TUI_SVG_DEFAULT_OPTIONS.deprecated,
        srcProcessor: inject(TUI_SVG_SRC_PROCESSOR),
        contentProcessor: inject(TUI_SVG_CONTENT_PROCESSOR),
    }),
});

export const tuiSvgOptionsProvider: (
    options: Partial<Omit<TuiSvgOptions, 'path'>> & {
        path?: TuiSvgOptions['path'] | string;
    },
) => FactoryProvider = options => ({
    provide: TUI_SVG_OPTIONS,
    deps: [[new SkipSelf(), new Optional(), TUI_SVG_OPTIONS]],
    useFactory: (fallback: TuiSvgOptions | null) => ({
        ...(fallback || TUI_SVG_DEFAULT_OPTIONS),
        ...options,
        path: tuiIsString(options.path)
            ? tuiIconsPathFactory(options.path)
            : options.path || fallback?.path || TUI_SVG_DEFAULT_OPTIONS.path,
    }),
});
