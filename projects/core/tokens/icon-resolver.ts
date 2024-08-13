import type {Provider} from '@angular/core';
import {inject} from '@angular/core';
import type {TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk/utils/miscellaneous';

import {TUI_ASSETS_PATH} from './assets-path';
import {TUI_ICON_STARTS} from './icons';

export const TUI_ICON_START_RESOLVER = tuiCreateTokenFromFactory<
    TuiStringHandler<string>
>(() => {
    const path = inject(TUI_ASSETS_PATH);

    return (icon) => {
        if (!icon || icon.includes('/')) {
            return icon;
        }

        let directory = '';

        if (icon.includes('@tui.material')) {
            directory = 'material/';
        } else if (icon.includes('@tui.fa')) {
            directory = 'fontawesome/';
        }

        const name = icon
            .replace(/^@tui./, '')
            .replace(/^material.|^fa./, '')
            .split('.')
            .join('/');

        return `${path}/${directory}${name}.svg`;
    };
});

export function tuiInjectIconResolver(): TuiStringHandler<string> {
    const icons = inject(TUI_ICON_STARTS);
    const resolver = inject(TUI_ICON_START_RESOLVER);

    return (icon) => icons[icon] || resolver(icon);
}

export function tuiIconResolverProvider(useValue: TuiStringHandler<string>): Provider {
    return {
        provide: TUI_ICON_START_RESOLVER,
        useValue,
    };
}
