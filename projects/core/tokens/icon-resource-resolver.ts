import {inject, InjectionToken} from '@angular/core';
import type {TuiHandler} from '@taiga-ui/cdk/types';

import {TUI_ASSETS_PATH} from './assets-path';
import {TUI_ICON_REGISTRY} from './icons';
import type {TuiIconResource} from './icon-mode-resolver';

export const TUI_ICON_SVG_RESOURCE_RESOLVER = new InjectionToken<
    TuiHandler<string, TuiIconResource>
>(ngDevMode ? 'TUI_ICON_SVG_RESOURCE_RESOLVER' : '', {
    factory: () => {
        const icons = inject(TUI_ICON_REGISTRY);
        const path = inject(TUI_ASSETS_PATH);
        return (icon) => {
            const iconPath =
                icons[icon] ??
                `${path}/${icon.replace(/@.*\./, '').split('.').join('/')}.svg`;
            return {
                path: `url(${iconPath})`,
                src: iconPath,
            };
        };
    },
});

export const TUI_ICON_IMAGE_RESOURCE_RESOLVER = new InjectionToken<
    TuiHandler<string, TuiIconResource>
>(ngDevMode ? 'TUI_ICON_IMAGE_RESOURCE_RESOLVER' : '', {
    factory: () => {
        return (icon) => {
            const iconPath = icon.replace('@image.mask.', '').replace('@image.', '');
            return {
                path: `url(${iconPath})`,
                src: iconPath,
            };
        };
    },
});

export const TUI_ICON_IMAGE_DATA_RESOURCE_RESOLVER = new InjectionToken<
    TuiHandler<string, TuiIconResource>
>(ngDevMode ? 'TUI_ICON_IMAGE_DATA_RESOURCE_RESOLVER' : '', {
    factory: () => {
        return (icon) => {
            const iconData = icon.replace('@image.data.', '');
            return {
                path: iconData,
                src: iconData,
            };
        };
    },
});

export const TUI_ICON_FONT_RESOURCE_RESOLVER = new InjectionToken<
    TuiHandler<string, TuiIconResource>
>(ngDevMode ? 'TUI_ICON_FONT_RESOURCE_RESOLVER' : '', {
    factory: () => {
        return (icon) => {
            const iconName = icon.replace('@font.', '');
            return {
                path: `'${iconName}'`,
                src: iconName,
            };
        };
    },
});
