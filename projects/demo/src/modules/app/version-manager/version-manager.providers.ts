import {DOCUMENT} from '@angular/common';
import {inject, InjectionToken, type Provider} from '@angular/core';
import {TUI_BASE_HREF} from '@taiga-ui/cdk';

import {TUI_VERSIONS_META_OPTIONS, type TuiVersionMeta} from './versions.constants';

export const TUI_SELECTED_VERSION_META = new InjectionToken<TuiVersionMeta | null>(
    ngDevMode ? 'TUI_SELECTED_VERSION_META' : '',
);

export const TUI_VERSION_MANAGER_PROVIDERS: Provider[] = [
    {
        provide: TUI_SELECTED_VERSION_META,
        deps: [TUI_BASE_HREF, DOCUMENT],
        useFactory: (baseHref: string, doc: Document): TuiVersionMeta | null => {
            const base = baseHref.replace(doc.location.origin, '');
            const versions = inject(TUI_VERSIONS_META_OPTIONS);
            const versionMap = versions.reduce(
                (map, item) => map.set(item.baseHref, item),
                new Map<string, TuiVersionMeta>(),
            );

            return versionMap.get(base) ?? versionMap.get('/') ?? null;
        },
    },
];
