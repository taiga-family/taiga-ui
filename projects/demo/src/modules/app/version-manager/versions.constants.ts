import {InjectionToken} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk';

export interface TuiVersionMeta {
    label: string;
    baseHref: string;
    majorTitle: string;
}

export const TUI_CURRENT_MAJOR_VERSION = parseInt(TUI_VERSION, 10);

export const TUI_VERSIONS_META: readonly TuiVersionMeta[] = [
    {
        label: `next`,
        baseHref: `next`,
        majorTitle: `v${TUI_CURRENT_MAJOR_VERSION}-next`,
    },
    {
        baseHref: `/`,
        label: `latest (v${TUI_VERSION})`,
        majorTitle: `v${TUI_CURRENT_MAJOR_VERSION}`,
    },
    {
        label: `v2`,
        baseHref: `v2`,
        majorTitle: `v2`,
    },
];

export const TUI_VERSIONS_META_OPTIONS = new InjectionToken<readonly TuiVersionMeta[]>(
    `[TUI_VERSIONS_META_OPTIONS]: list of versions taiga ui kit`,
    {factory: () => TUI_VERSIONS_META},
);
