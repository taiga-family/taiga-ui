import {TUI_VERSION, tuiCreateToken} from '@taiga-ui/cdk';

export interface TuiVersionMeta {
    baseHref: string;
    label: string;
    title: string;
}

export const TUI_VERSIONS_META: readonly TuiVersionMeta[] = [
    {
        label: 'v4',
        baseHref: '/',
        title: 'v4',
    },
    {
        label: `v${TUI_VERSION} (lts)`,
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

export const TUI_VERSIONS_META_OPTIONS =
    tuiCreateToken<readonly TuiVersionMeta[]>(TUI_VERSIONS_META);
