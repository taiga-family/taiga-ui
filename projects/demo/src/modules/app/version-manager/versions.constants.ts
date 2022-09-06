import {TUI_VERSION} from '@taiga-ui/cdk';

export interface TuiVersionMeta {
    label: string;
    baseHref: string;
    alias: string;
}

export const TAIGA_VERSIONS_META: readonly TuiVersionMeta[] = [
    {
        label: `next`,
        baseHref: `next`,
        alias: `v${parseInt(TUI_VERSION)}-next`,
    },
    {
        label: `latest (v${TUI_VERSION})`,
        baseHref: ``,
        alias: `v${parseInt(TUI_VERSION)}`,
    },
    {
        label: `v2`,
        baseHref: `v2`,
        alias: `v2`,
    },
];
