import {TUI_VERSION} from '@taiga-ui/cdk';

export interface TuiVersionMeta {
    label: string;
    baseHref: string;
    versionDemo: string;
}

export const TAIGA_VERSIONS_META: readonly TuiVersionMeta[] = [
    {
        label: `next`,
        baseHref: `next`,
        versionDemo: `v${parseInt(TUI_VERSION)}-next`,
    },
    {
        label: `latest (v${TUI_VERSION})`,
        baseHref: ``,
        versionDemo: `v${parseInt(TUI_VERSION)}`,
    },
];
