import type {Provider} from '@angular/core';
import {inject, InjectionToken} from '@angular/core';
import type {TuiHandler, TuiStringHandler} from '@taiga-ui/cdk/types';

import {TUI_ASSETS_PATH} from './assets-path';
import {TUI_ICON_REGISTRY} from './icons';
import {TUI_ICON_MODE_RESOLVER, type TuiIconResource} from './icon-mode-resolver';

export interface TuiResolvedIcon {
    className: string;
    resource: TuiIconResource;
}

export function tuiInjectIconModeResolver(): TuiHandler<string, TuiResolvedIcon> {
    const modeResolver = inject(TUI_ICON_MODE_RESOLVER);
    return (icon): TuiResolvedIcon => {
        const resolvedIconMode = modeResolver(icon);
        return {
            className: resolvedIconMode.className,
            resource: !icon
                ? {path: icon, src: icon}
                : resolvedIconMode.resourceResolver(icon),
        };
    };
}

/**
 * @deprecated
 */
export const TUI_ICON_RESOLVER = new InjectionToken<TuiStringHandler<string>>(
    ngDevMode ? 'TUI_ICON_RESOLVER' : '',
    {
        factory: () => {
            const icons = inject(TUI_ICON_REGISTRY);
            const path = inject(TUI_ASSETS_PATH);
            return (icon: string) => {
                const isPath = icon.includes('/');
                const iconPath = isPath
                    ? icon
                    : (icons[icon] ??
                      `${path}/${icon.replace('@icon.', '').split('.').join('/')}.svg`);
                return `url(${iconPath})`;
            };
        },
    },
);

/**
 * @deprecated use {@link TUI_ICON_RESOLVER}
 */
export const TUI_ICON_START_RESOLVER = TUI_ICON_RESOLVER;

/**
 * @deprecated
 */
export function tuiInjectIconResolver(): TuiStringHandler<string> {
    const icons = inject(TUI_ICON_REGISTRY);
    const resolver = inject(TUI_ICON_RESOLVER);
    return (icon): string => (!icon ? icon : resolver(icon));
}

/**
 * @deprecated
 */
export function tuiIconResolverProvider(useValue: TuiStringHandler<string>): Provider {
    return {provide: TUI_ICON_RESOLVER, useValue};
}
