import {LocationStrategy} from '@angular/common';
import {InjectionToken, Provider} from '@angular/core';

import {
    TUI_CURRENT_MAJOR_VERSION,
    TUI_VERSIONS_META_OPTIONS,
    TuiVersionMeta,
} from './versions.constants';

export const TUI_SELECTED_VERSION_META = new InjectionToken<TuiVersionMeta | null>(
    `[TUI_SELECTED_VERSION_META]: Meta information about selected version of Taiga docs`,
);

export const TUI_VERSION_MANAGER_PROVIDERS: Provider[] = [
    {
        provide: TUI_SELECTED_VERSION_META,
        deps: [LocationStrategy, TUI_VERSIONS_META_OPTIONS],
        useFactory: (
            strategy: LocationStrategy,
            versions: readonly TuiVersionMeta[],
        ): TuiVersionMeta | null => {
            const baseHrefAppVersion =
                strategy.path().split(`/`).filter(Boolean)?.[0] ?? `/`;

            return (
                versions.find(
                    meta =>
                        meta.baseHref === baseHrefAppVersion ||
                        meta.alias === `v${TUI_CURRENT_MAJOR_VERSION}`,
                ) ?? null
            );
        },
    },
];
