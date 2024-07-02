import type {Provider} from '@angular/core';
import {inject} from '@angular/core';
import type {TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk/utils/miscellaneous';

import {TUI_ASSETS_PATH} from './assets-path';
import {TUI_ICONS} from './icons';

export const TUI_ICON_RESOLVER = tuiCreateTokenFromFactory<TuiStringHandler<string>>(
    () => {
        const path = inject(TUI_ASSETS_PATH);

        return icon =>
            !icon || icon.includes('/')
                ? icon
                : `${path}/${icon.replace('@tui.', '').split('.').join('/')}.svg`;
    },
);

export function tuiInjectIconResolver(): TuiStringHandler<string> {
    const icons = inject(TUI_ICONS);
    const resolver = inject(TUI_ICON_RESOLVER);

    return icon => icons[icon] || resolver(icon);
}

export function tuiIconResolverProvider(useValue: TuiStringHandler<string>): Provider {
    return {
        provide: TUI_ICON_RESOLVER,
        useValue,
    };
}
