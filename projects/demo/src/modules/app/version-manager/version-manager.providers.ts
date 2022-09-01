import {LocationStrategy} from '@angular/common';
import {InjectionToken, Provider} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk';

import {TAIGA_VERSIONS_META, TuiVersionMeta} from './versions.constants';

export const SELECTED_VERSION_META = new InjectionToken<TuiVersionMeta | null>(
    `Meta information about selected version of Taiga docs`,
);

export const VERSION_MANAGER_PROVIDERS: Provider[] = [
    {
        provide: SELECTED_VERSION_META,
        deps: [LocationStrategy],
        useFactory: (strategy: LocationStrategy): TuiVersionMeta | null => {
            return (
                TAIGA_VERSIONS_META.find(meta => {
                    return (
                        meta.baseHref === strategy.getBaseHref().replace(/\//g, ``) ||
                        meta.versionDemo === `v${TUI_VERSION}`
                    );
                }) || null
            );
        },
    },
];
