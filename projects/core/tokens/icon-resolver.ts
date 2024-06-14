import type {Provider} from '@angular/core';
import {inject} from '@angular/core';
import type {TuiStringHandler} from '@taiga-ui/cdk';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk';

import {TUI_ASSETS_PATH} from './assets-path';

export const TUI_ICON_RESOLVER = tuiCreateTokenFromFactory<TuiStringHandler<string>>(
    // TODO: Remove backwards compatibility in 4.0
    () => {
        const path = inject(TUI_ASSETS_PATH);

        return icon =>
            !icon || icon.includes('/')
                ? icon
                : `${path}${
                      icon.includes('Outline')
                          ? icon
                          : icon.replace('Large', '').concat('Outline')
                  }.svg`;
    },
);

export function tuiIconResolverProvider(useValue: TuiStringHandler<string>): Provider {
    return {
        provide: TUI_ICON_RESOLVER,
        useValue,
    };
}
