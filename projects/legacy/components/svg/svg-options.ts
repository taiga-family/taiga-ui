import {
    type FactoryProvider,
    InjectionToken,
    Optional,
    type Provider,
    SkipSelf,
} from '@angular/core';
import {
    type TuiHandler,
    type TuiSafeHtml,
    type TuiStringHandler,
} from '@taiga-ui/cdk/types';
import {tuiIsString} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiIconsPathFactory} from '@taiga-ui/legacy/utils';
import {identity} from 'rxjs';

import {tuiSvgLinearGradientProcessor} from './content-processor';
import {TUI_DEPRECATED_ICONS} from './deprecated-icons';

/**
 * @deprecated: drop in v5.0 use {@link TuiIcon}
 * https://taiga-ui.dev/components/icon
 */
export const TUI_DEFAULT_ICONS_PLACE = 'assets/taiga-ui/icons';

/**
 * @deprecated: drop in v5.0 use {@link TuiIcon}
 * https://taiga-ui.dev/components/icon
 */
export interface TuiSvgOptions {
    readonly contentProcessor: TuiHandler<TuiSafeHtml, TuiSafeHtml>;
    readonly deprecated: TuiStringHandler<string>;
    readonly iconsPlace: string;
    readonly path: (name: string, baseHref?: string) => string;
    readonly srcProcessor: TuiHandler<TuiSafeHtml, TuiSafeHtml>;
}

/**
 * @deprecated: drop in v5.0 use {@link TuiIcon}
 * https://taiga-ui.dev/components/icon
 */
export type TuiSvgInterceptorHandler =
    | ((src: TuiSafeHtml, options: TuiSvgOptions) => TuiSafeHtml)
    | ((src: TuiSafeHtml) => TuiSafeHtml);

/**
 * @deprecated: drop in v5.0 use {@link TuiIcon}
 * https://taiga-ui.dev/components/icon
 */
export const TUI_SVG_DEFAULT_OPTIONS: TuiSvgOptions = {
    iconsPlace: TUI_DEFAULT_ICONS_PLACE,
    path: tuiIconsPathFactory(TUI_DEFAULT_ICONS_PLACE),
    srcProcessor: identity,
    contentProcessor: tuiSvgLinearGradientProcessor,
    deprecated: (src) => {
        const oldIcon = src.replace('Large', '').replace('Outline', '');
        const newIcon = TUI_DEPRECATED_ICONS[oldIcon];

        return newIcon
            ? `${oldIcon}/(Large|Outline) is deprecated, use ${newIcon}/(Large|Outline) instead`
            : '';
    },
};

/**
 * @deprecated: drop in v5.0 use {@link TuiIcon}
 * https://taiga-ui.dev/components/icon
 */
export const TUI_SVG_OPTIONS = new InjectionToken<TuiSvgOptions>(
    ngDevMode ? 'TUI_SVG_OPTIONS' : '',
    {
        factory: () => ({
            iconsPlace: TUI_DEFAULT_ICONS_PLACE,
            path: tuiIconsPathFactory(TUI_DEFAULT_ICONS_PLACE),
            deprecated: TUI_SVG_DEFAULT_OPTIONS.deprecated,
            srcProcessor: identity,
            contentProcessor: tuiSvgLinearGradientProcessor,
        }),
    },
);

/**
 * @deprecated: drop in v5.0 use {@link TuiIcon}
 * https://taiga-ui.dev/components/icon
 */
export const TUI_SVG_SRC_INTERCEPTORS = new InjectionToken<TuiSvgInterceptorHandler>(
    ngDevMode ? 'TUI_SVG_SRC_INTERCEPTORS' : '',
);

/**
 * @deprecated: drop in v5.0 use {@link TuiIcon}
 * https://taiga-ui.dev/components/icon
 */
export function tuiSvgSrcInterceptors(interceptor: TuiSvgInterceptorHandler): Provider {
    return {
        provide: TUI_SVG_SRC_INTERCEPTORS,
        useValue: interceptor,
        multi: true,
    };
}

/**
 * @deprecated: drop in v5.0 use {@link TuiIcon}
 * https://taiga-ui.dev/components/icon
 */
export const tuiSvgOptionsProvider: (
    options: Partial<Omit<TuiSvgOptions, 'path'>> & {
        path?: TuiSvgOptions['path'] | string;
    },
) => FactoryProvider = (options) => ({
    provide: TUI_SVG_OPTIONS,
    deps: [[new SkipSelf(), new Optional(), TUI_SVG_OPTIONS]],
    useFactory: (fallback: TuiSvgOptions | null): TuiSvgOptions => ({
        iconsPlace:
            options.iconsPlace ??
            fallback?.iconsPlace ??
            TUI_SVG_DEFAULT_OPTIONS.iconsPlace,
        path: tuiIsString(options.path)
            ? tuiIconsPathFactory(options.path)
            : (options.path ?? fallback?.path ?? TUI_SVG_DEFAULT_OPTIONS.path),
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
