import {DOCUMENT} from '@angular/common';
import {inject, InjectionToken, type Provider} from '@angular/core';

import {TUI_VERSIONS_META_OPTIONS, type TuiVersionMeta} from './versions.constants';

export const TUI_SELECTED_VERSION_META = new InjectionToken<TuiVersionMeta | null>(
    ngDevMode ? 'TUI_SELECTED_VERSION_META' : '',
);

export const TUI_VERSION_MANAGER_PROVIDERS: Provider[] = [
    {
        provide: TUI_SELECTED_VERSION_META,
        useFactory: (): TuiVersionMeta | null => {
            const document = inject(DOCUMENT);
            const baseHref = document.querySelector('base')?.href ?? '';
            const base = baseHref.replace(document.location.origin, '');
            const versions = inject(TUI_VERSIONS_META_OPTIONS);

            const versionMap = versions.reduce(
                (map, item) => map.set(item.baseHref, item),
                new Map<string, TuiVersionMeta>(),
            );

            return versionMap.get(base) ?? versionMap.get('/') ?? null;
        },
    },
];
