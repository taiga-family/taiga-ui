import {LocationStrategy} from '@angular/common';
import {InjectionToken, Provider} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk';

import {TUI_VERSIONS_META_OPTIONS, TuiVersionMeta} from './versions.constants';

export const TUI_SELECTED_VERSION_META = new InjectionToken<TuiVersionMeta | null>(
    `Meta information about selected version of Taiga docs`,
);

export const TUI_VERSION_MANAGER_PROVIDERS: Provider[] = [
    {
        provide: TUI_SELECTED_VERSION_META,
        deps: [LocationStrategy, TUI_VERSIONS_META_OPTIONS],
        useFactory: (
            strategy: LocationStrategy,
            versions: readonly TuiVersionMeta[],
        ): TuiVersionMeta | null => {
            return (
                versions.find(meta => {
                    return (
                        meta.baseHref === strategy.getBaseHref().replace(/\//g, ``) ||
                        meta.alias === `v${parseInt(TUI_VERSION)}`
                    );
                }) ?? null
            );
        },
    },
];
