import {VERSION} from '@taiga-ui/core';

export interface TuiVersionMeta {
    label: string;
    baseHref: string;
}

export const TAIGA_VERSIONS_META: readonly TuiVersionMeta[] = [
    {
        label: 'next',
        baseHref: 'next',
    },
    {
        label: `latest (v${VERSION})`,
        baseHref: '',
    },
];
