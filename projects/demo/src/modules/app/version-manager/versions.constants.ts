import {VERSION} from '@taiga-ui/core';

export interface TaigaVersionMeta {
    label: string;
    baseHref: string;
}

export const TAIGA_VERSION_META: ReadonlyArray<TaigaVersionMeta> = [
    {
        label: `latest (v${VERSION})`,
        baseHref: '',
    },
    {
        label: 'next',
        baseHref: 'next',
    },
];
