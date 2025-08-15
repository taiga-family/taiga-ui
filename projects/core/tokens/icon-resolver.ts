import {inject, InjectionToken, type Provider} from '@angular/core';
import {type TuiStringHandler} from '@taiga-ui/cdk/types';

import {TUI_ASSETS_PATH} from './assets-path';
import {TUI_ICON_REGISTRY} from './icons';

const ICON_MODE_PREFIXES = {
    font: '@font.',
    image: '@img.',
};

type TUI_ICON_MODE = 'font' | 'image' | 'svg';

export const TUI_ICON_RESOLVER = new InjectionToken<TuiStringHandler<string>>(
    ngDevMode ? 'TUI_ICON_RESOLVER' : '',
    {
        factory: () => {
            const path = inject(TUI_ASSETS_PATH);

            // regex for @{any text}. used as a default fallback, returns path to svg from icon pack
            return (icon) =>
                `${path}/${icon
                    .replace(/@[a-zA-Z]+\./, '')
                    .split('.')
                    .join('/')}.svg`;
        },
    },
);

/**
 * @deprecated use {@link TUI_ICON_RESOLVER}
 */
export const TUI_ICON_START_RESOLVER = TUI_ICON_RESOLVER;

export function tuiGetIconMode(icon?: string | null): TUI_ICON_MODE | null {
    if (!icon) {
        return null;
    }

    if (icon.startsWith(ICON_MODE_PREFIXES.image)) {
        return 'image';
    }

    if (icon.startsWith(ICON_MODE_PREFIXES.font)) {
        return 'font';
    }

    return 'svg';
}

export function tuiInjectIconResolver(): TuiStringHandler<string> {
    const icons = inject(TUI_ICON_REGISTRY);
    const resolver = inject(TUI_ICON_RESOLVER);

    return (icon) => {
        if (!icon || icon.includes('/')) {
            return icon;
        }

        if (tuiGetIconMode(icon) === 'font') {
            return icon.slice(ICON_MODE_PREFIXES.font.length);
        }

        return icons[icon] ?? resolver(icon);
    };
}

export function tuiIconResolverProvider(useValue: TuiStringHandler<string>): Provider {
    return {provide: TUI_ICON_RESOLVER, useValue};
}
