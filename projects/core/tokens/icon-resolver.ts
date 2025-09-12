import {inject, InjectionToken, type Provider} from '@angular/core';
import {type TuiStringHandler} from '@taiga-ui/cdk/types';

import {TUI_ASSETS_PATH} from './assets-path';
import {TUI_ICON_REGISTRY} from './icons';

export const TUI_ICON_RESOLVER = new InjectionToken<TuiStringHandler<string>>(
    ngDevMode ? 'TUI_ICON_RESOLVER' : '',
    {
        factory: () => {
            const path = inject(TUI_ASSETS_PATH);

            // regex for @{any text}. used as a default fallback, returns path to svg from icon pack
            return (icon) =>
                `${path}/${icon.replace(/@[a-zA-Z]+\./, '').replaceAll('.', '/')}.svg`;
        },
    },
);

/**
 * @deprecated use {@link TUI_ICON_RESOLVER}
 */
export const TUI_ICON_START_RESOLVER = TUI_ICON_RESOLVER;

export function tuiGetIconMode(icon?: string | null): string | undefined {
    return icon?.slice(icon.indexOf('@') + 1, icon.indexOf('.')) || undefined;
}

export function tuiInjectIconResolver(): TuiStringHandler<string> {
    const icons = inject(TUI_ICON_REGISTRY);
    const resolver = inject(TUI_ICON_RESOLVER);

    return (icon) => {
        if (!icon || icon.includes('/')) {
            return icon;
        }

        return icon.startsWith('@font.')
            ? icon.replace('@font.', '')
            : (icons[icon] ?? resolver(icon));
    };
}

export function tuiIconResolverProvider(useValue: TuiStringHandler<string>): Provider {
    return {provide: TUI_ICON_RESOLVER, useValue};
}
