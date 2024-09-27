import {InjectionToken} from '@angular/core';

import {TUI_VERSIONS_META_MAP, TuiVersionMeta} from './versions.constants';

export const TUI_SELECTED_VERSION_META = new InjectionToken<TuiVersionMeta | null>(
    '[TUI_SELECTED_VERSION_META]: Meta information about selected version of Taiga docs',
    {
        factory: () => TUI_VERSIONS_META_MAP.get('/v3/') || null,
    },
);
