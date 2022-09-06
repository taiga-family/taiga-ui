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
        baseHref: ``,
        label: `latest (v${TUI_VERSION})`,
        alias: `v${parseInt(TUI_VERSION)}`,
    },
];
