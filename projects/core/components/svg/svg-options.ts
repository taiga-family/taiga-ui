import type {FactoryProvider, Provider} from '@angular/core';
import {InjectionToken, Optional, SkipSelf} from '@angular/core';
import type {TuiHandler, TuiSafeHtml, TuiStringHandler} from '@taiga-ui/cdk';
import {tuiCreateTokenFromFactory, tuiIsString} from '@taiga-ui/cdk';
import {tuiIconsPathFactory} from '@taiga-ui/core/utils';
import {identity} from 'rxjs';

import {tuiSvgLinearGradientProcessor} from './content-processor';
import {TUI_DEPRECATED_ICONS} from './deprecated-icons';

export const TUI_DEFAULT_ICONS_PLACE = 'assets/taiga-ui/icons';

export interface TuiSvgOptions {
    readonly contentProcessor: TuiHandler<TuiSafeHtml, TuiSafeHtml>;
    readonly deprecated: TuiStringHandler<string>;
    readonly iconsPlace: string;
    readonly path: (name: string, baseHref?: string) => string;
    readonly srcProcessor: TuiHandler<TuiSafeHtml, TuiSafeHtml>;
}

export type TuiSvgInterceptorHandler =
    | ((src: TuiSafeHtml, options: TuiSvgOptions) => TuiSafeHtml)
    | ((src: TuiSafeHtml) => TuiSafeHtml);

export const TUI_SVG_DEFAULT_OPTIONS: TuiSvgOptions = {
    iconsPlace: TUI_DEFAULT_ICONS_PLACE,
    path: tuiIconsPathFactory(TUI_DEFAULT_ICONS_PLACE),
    srcProcessor: identity,
    contentProcessor: tuiSvgLinearGradientProcessor,
    deprecated: src => {
        const oldIcon = src.replace('Large', '').replace('Outline', '');
        const newIcon = TUI_DEPRECATED_ICONS[oldIcon];

        return newIcon
            ? `${oldIcon}/(Large|Outline) is deprecated, use ${newIcon}/(Large|Outline) instead`
            : '';
    },
};

/**
 * SVG component options
 */
export const TUI_SVG_OPTIONS = tuiCreateTokenFromFactory<TuiSvgOptions>(() => ({
    iconsPlace: TUI_DEFAULT_ICONS_PLACE,
    path: tuiIconsPathFactory(TUI_DEFAULT_ICONS_PLACE),
    deprecated: TUI_SVG_DEFAULT_OPTIONS.deprecated,
    srcProcessor: identity,
    contentProcessor: tuiSvgLinearGradientProcessor,
}));

export const TUI_SVG_SRC_INTERCEPTORS = new InjectionToken<TuiSvgInterceptorHandler>(
    '[TUI_SVG_SRC_INTERCEPTORS]',
);

export function tuiSvgSrcInterceptors(interceptor: TuiSvgInterceptorHandler): Provider {
    return {
        provide: TUI_SVG_SRC_INTERCEPTORS,
        useValue: interceptor,
        multi: true,
    };
}

export const tuiSvgOptionsProvider: (
    options: Partial<Omit<TuiSvgOptions, 'path'>> & {
        path?: TuiSvgOptions['path'] | string;
    },
) => FactoryProvider = options => ({
    provide: TUI_SVG_OPTIONS,
    deps: [[new SkipSelf(), new Optional(), TUI_SVG_OPTIONS]],
    useFactory: (fallback: TuiSvgOptions | null): TuiSvgOptions => ({
        iconsPlace:
            options.iconsPlace ??
            fallback?.iconsPlace ??
            TUI_SVG_DEFAULT_OPTIONS.iconsPlace,
        path: tuiIsString(options.path)
            ? tuiIconsPathFactory(options.path)
            : options.path ?? fallback?.path ?? TUI_SVG_DEFAULT_OPTIONS.path,
        deprecated:
            options.deprecated ??
            fallback?.deprecated ??
            TUI_SVG_DEFAULT_OPTIONS.deprecated,
        srcProcessor:
            options.srcProcessor ??
            fallback?.srcProcessor ??
            TUI_SVG_DEFAULT_OPTIONS.srcProcessor,
        contentProcessor:
            options.contentProcessor ??
            fallback?.contentProcessor ??
            TUI_SVG_DEFAULT_OPTIONS.contentProcessor,
    }),
});
