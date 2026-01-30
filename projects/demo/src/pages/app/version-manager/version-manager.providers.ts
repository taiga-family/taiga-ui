import {DOCUMENT} from '@angular/common';
import {inject, InjectionToken, type Provider} from '@angular/core';

import {TUI_VERSIONS_META_MAP, type TuiVersionMeta} from './versions.constants';

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

            return (
                TUI_VERSIONS_META_MAP.get(base) ?? TUI_VERSIONS_META_MAP.get('/') ?? null
            );
        },
    },
];
