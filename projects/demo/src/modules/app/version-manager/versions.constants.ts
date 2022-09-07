import {InjectionToken} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk';

export interface TuiVersionMeta {
    label: string;
    baseHref: string;
    alias: string;
}

export const TUI_VERSIONS_META: readonly TuiVersionMeta[] = [
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

export const TUI_VERSIONS_META_OPTIONS = new InjectionToken<readonly TuiVersionMeta[]>(
    `[TAIGA_VERSIONS_META_OPTIONS]: list of versions taiga ui kit`,
    {factory: () => TUI_VERSIONS_META},
);
