import {TUI_VERSION, tuiCreateToken} from '@taiga-ui/cdk';

export interface TuiVersionMeta {
    baseHref: string;
    label: string;
    title: string;
}

export const TUI_CURRENT_MAJOR_VERSION = parseInt(TUI_VERSION, 10);

export const TUI_VERSIONS_META: readonly TuiVersionMeta[] = [
    {
        baseHref: `/next/`,
        label: `next`,
        title: `v${TUI_CURRENT_MAJOR_VERSION}.next`,
    },
    {
        baseHref: `/`,
        label: `latest (v${TUI_VERSION})`,
        title: `v${TUI_CURRENT_MAJOR_VERSION}`,
    },
    {
        baseHref: `/v2/`,
        label: `v2`,
        title: `v2`,
    },
];

export const TUI_VERSIONS_META_MAP = TUI_VERSIONS_META.reduce(
    (map, item) => map.set(item.baseHref, item),
    new Map<string, TuiVersionMeta>(),
);

export const TUI_VERSIONS_META_OPTIONS =
    tuiCreateToken<readonly TuiVersionMeta[]>(TUI_VERSIONS_META);
