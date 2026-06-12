import {computed, inject, InjectionToken, type Signal} from '@angular/core';
import {WA_IS_IOS} from '@ng-web-apis/platform';

import {TUI_OPTIONS} from './provide-taiga';

export const TUI_LIQUID_GLASS = new InjectionToken<Signal<boolean>>(
    ngDevMode ? 'TUI_LIQUID_GLASS' : '',
    {
        factory: () => {
            const options = inject(TUI_OPTIONS);
            const isIOS = inject(WA_IS_IOS);

            return computed(
                () =>
                    options.apis !== 'stable' &&
                    isIOS &&
                    (options.apis.all || !!options.apis.liquidGlass?.()),
            );
        },
    },
);
