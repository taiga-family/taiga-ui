import {InjectionToken} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk';

export interface TuiVersionMeta {
    label: string;
    majorTitle: string;
    appSubdirectory: string;
}

export const TUI_CURRENT_MAJOR_VERSION = parseInt(TUI_VERSION, 10);

export const TUI_VERSIONS_META: readonly TuiVersionMeta[] = [
    {
        label: `next`,
        appSubdirectory: `next`,
        majorTitle: `v${TUI_CURRENT_MAJOR_VERSION}-next`,
    },
    {
        appSubdirectory: `/`,
        label: `latest (v${TUI_VERSION})`,
        majorTitle: `v${TUI_CURRENT_MAJOR_VERSION}`,
    },
    {
        label: `v2`,
        appSubdirectory: `v2`,
        majorTitle: `v2`,
    },
];

export const TUI_VERSIONS_META_OPTIONS = new InjectionToken<readonly TuiVersionMeta[]>(
    `[TUI_VERSIONS_META_OPTIONS]: list of versions taiga ui kit`,
    {factory: () => TUI_VERSIONS_META},
);
