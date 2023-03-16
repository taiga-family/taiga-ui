import {InjectionToken} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk';

export interface TuiVersionMeta {
    label: string;
    baseHref: string;
    alias: string;
}

export const TUI_CURRENT_MAJOR_VERSION = parseInt(TUI_VERSION, 10);

export const TUI_VERSIONS_META: readonly TuiVersionMeta[] = [
    {
        label: `next`,
        alias: `v${TUI_CURRENT_MAJOR_VERSION}-next`,
        baseHref: `next`,
    },
    {
        label: `latest (v${TUI_VERSION})`,
        alias: `v${TUI_CURRENT_MAJOR_VERSION}`,
        baseHref: `/`,
    },
    {
        label: `v2`,
        alias: `v2`,
        baseHref: `v2`,
    },
];

export const TUI_VERSIONS_META_OPTIONS = new InjectionToken<readonly TuiVersionMeta[]>(
    `[TUI_VERSIONS_META_OPTIONS]: list of versions taiga ui kit`,
    {factory: () => TUI_VERSIONS_META},
);
