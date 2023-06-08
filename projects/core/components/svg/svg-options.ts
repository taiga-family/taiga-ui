import {
    FactoryProvider,
    inject,
    InjectionToken,
    Optional,
    Provider,
    SkipSelf,
} from '@angular/core';
import {
    TuiHandler,
    tuiIsString,
    TuiSafeHtml,
    TuiStringHandler,
    tuiSvgLinearGradientProcessor,
} from '@taiga-ui/cdk';
import {
    TUI_DEFAULT_ICONS_PLACE,
    TUI_ICONS_PATH,
    TUI_ICONS_PLACE,
    TUI_SVG_CONTENT_PROCESSOR,
    TUI_SVG_SRC_PROCESSOR,
} from '@taiga-ui/core/tokens';
import {tuiIconsPathFactory} from '@taiga-ui/core/utils';
import {identity} from 'rxjs';

import {TUI_DEPRECATED_ICONS} from './deprecated-icons';

export interface TuiSvgOptions {
    readonly iconsPlace: string;
    readonly path: TuiStringHandler<string>;
    readonly deprecated: TuiStringHandler<string>;
    readonly srcProcessor: TuiHandler<TuiSafeHtml, TuiSafeHtml>;
    readonly contentProcessor: TuiHandler<TuiSafeHtml, TuiSafeHtml>;
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
        const oldIcon = src.replace(`Large`, ``).replace(`Outline`, ``);
        const newIcon = TUI_DEPRECATED_ICONS[oldIcon];

        return newIcon
            ? `${oldIcon}/(Large|Outline) is deprecated, use ${newIcon}/(Large|Outline) instead`
            : ``;
    },
};

/**
 * SVG component options
 */
export const TUI_SVG_OPTIONS = new InjectionToken<TuiSvgOptions>(`[TUI_SVG_OPTIONS]`, {
    factory: () => ({
        iconsPlace: inject(TUI_ICONS_PLACE),
        path: inject(TUI_ICONS_PATH),
        deprecated: TUI_SVG_DEFAULT_OPTIONS.deprecated,
        srcProcessor: inject(TUI_SVG_SRC_PROCESSOR),
        contentProcessor: inject(TUI_SVG_CONTENT_PROCESSOR),
    }),
});

export const TUI_SVG_SRC_INTERCEPTORS = new InjectionToken<TuiSvgInterceptorHandler>(
    `[TUI_SVG_SRC_INTERCEPTORS]`,
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
    deps: [
        [new SkipSelf(), new Optional(), TUI_SVG_OPTIONS],
        [new Optional(), TUI_ICONS_PLACE],
        [new Optional(), TUI_ICONS_PATH],
        [new Optional(), TUI_SVG_SRC_PROCESSOR],
        [new Optional(), TUI_SVG_CONTENT_PROCESSOR],
    ],
    useFactory: (
        fallback: TuiSvgOptions | null,
        iconsPlace: string | null,
        path: TuiSvgOptions['path'] | null,
        srcProcessor: TuiSvgOptions['srcProcessor'] | null,
        contentProcessor: TuiSvgOptions['contentProcessor'] | null,
    ): TuiSvgOptions => ({
        iconsPlace:
            options.iconsPlace ??
            fallback?.iconsPlace ??
            iconsPlace ??
            TUI_SVG_DEFAULT_OPTIONS.iconsPlace,
        path: tuiIsString(options.path)
            ? tuiIconsPathFactory(options.path)
            : options.path ?? fallback?.path ?? path ?? TUI_SVG_DEFAULT_OPTIONS.path,
        deprecated:
            options.deprecated ??
            fallback?.deprecated ??
            TUI_SVG_DEFAULT_OPTIONS.deprecated,
        srcProcessor:
            options.srcProcessor ??
            fallback?.srcProcessor ??
            srcProcessor ??
            TUI_SVG_DEFAULT_OPTIONS.srcProcessor,
        contentProcessor:
            options.contentProcessor ??
            fallback?.contentProcessor ??
            contentProcessor ??
            TUI_SVG_DEFAULT_OPTIONS.contentProcessor,
    }),
});
