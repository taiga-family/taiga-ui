import {InjectionToken} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk';

export interface TuiVersionMeta {
    baseHref: string;
    label: string;
    title: string;
}

export const TUI_CURRENT_MAJOR_VERSION = parseInt(TUI_VERSION, 10);

export const TUI_VERSIONS_META: readonly TuiVersionMeta[] = [
    {
        label: 'next',
        baseHref: '/next/',
        title: `v${TUI_CURRENT_MAJOR_VERSION}.next`,
    },
    {
        label: `v${TUI_VERSION}`,
        baseHref: '/',
        title: `v${TUI_CURRENT_MAJOR_VERSION}`,
    },
    {
        label: 'v3',
        baseHref: '/v3/',
        title: 'v3',
    },
    {
        label: 'v2',
        baseHref: '/v2/',
        title: 'v2',
    },
];

export const TUI_VERSIONS_META_MAP = TUI_VERSIONS_META.reduce(
    (map, item) => map.set(item.baseHref, item),
    new Map<string, TuiVersionMeta>(),
);

export const TUI_VERSIONS_META_OPTIONS = new InjectionToken<readonly TuiVersionMeta[]>(
    ngDevMode ? 'TUI_VERSIONS_META_OPTIONS' : '',
    {
        factory: () => TUI_VERSIONS_META,
    },
);
