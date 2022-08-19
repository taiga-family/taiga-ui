import {TUI_VERSION} from '@taiga-ui/cdk';

export interface TuiVersionMeta {
    label: string;
    baseHref: string;
}

export const TAIGA_VERSIONS_META: readonly TuiVersionMeta[] = [
    {
        label: `next`,
        baseHref: `next`,
    },
    {
        label: `latest (v${TUI_VERSION})`,
        baseHref: ``,
    },
];
