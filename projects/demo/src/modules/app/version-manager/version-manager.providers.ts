import {DOCUMENT} from '@angular/common';
import type {Provider} from '@angular/core';
import {TUI_BASE_HREF} from '@taiga-ui/cdk';

import type {TuiVersionMeta} from './versions.constants';
import {TUI_VERSIONS_META_MAP} from './versions.constants';
import {InjectionToken} from '@angular/core';

export const TUI_SELECTED_VERSION_META = new InjectionToken<TuiVersionMeta | null>(
    ngDevMode ? 'TUI_SELECTED_VERSION_META' : '',
);

export const TUI_VERSION_MANAGER_PROVIDERS: Provider[] = [
    {
        provide: TUI_SELECTED_VERSION_META,
        deps: [TUI_BASE_HREF, DOCUMENT],
        useFactory: (baseHref: string, doc: Document): TuiVersionMeta | null => {
            const base = baseHref.replace(doc.location.origin, '');

            return (
                TUI_VERSIONS_META_MAP.get(base) ?? TUI_VERSIONS_META_MAP.get('/') ?? null
            );
        },
    },
];
