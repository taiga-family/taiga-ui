import {InjectionToken, Provider} from '@angular/core';
import {TUI_ENSURE_BASE_HREF} from '@taiga-ui/cdk';

import {TUI_VERSIONS_META_MAP, TuiVersionMeta} from './versions.constants';

export const TUI_SELECTED_VERSION_META = new InjectionToken<TuiVersionMeta | null>(
    `[TUI_SELECTED_VERSION_META]: Meta information about selected version of Taiga docs`,
);

export const TUI_VERSION_MANAGER_PROVIDERS: Provider[] = [
    {
        provide: TUI_SELECTED_VERSION_META,
        deps: [TUI_ENSURE_BASE_HREF],
        useFactory: (baseHref: string): TuiVersionMeta | null =>
            TUI_VERSIONS_META_MAP.get(baseHref) ?? TUI_VERSIONS_META_MAP.get(`/`) ?? null,
    },
];
