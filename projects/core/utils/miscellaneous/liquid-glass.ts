import {inject, InjectionToken} from '@angular/core';

import {TUI_OPTIONS} from './provide-taiga';

export const TUI_LIQUID_GLASS = new InjectionToken<boolean>(
    ngDevMode ? 'TUI_LIQUID_GLASS' : '',
    {
        factory: () => {
            const {apis} = inject(TUI_OPTIONS);

            return apis !== 'stable' && (apis.all || !!apis.liquidGlass);
        },
    },
);
