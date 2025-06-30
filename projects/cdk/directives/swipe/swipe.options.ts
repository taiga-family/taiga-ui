import {InjectionToken} from '@angular/core';

import type {TuiSwipeOptions} from './swipe.types';

export const TUI_SWIPE_OPTIONS = new InjectionToken<TuiSwipeOptions>(
    'TUI_SWIPE_OPTIONS',
    {
        factory: () => ({
            timeout: 500,
            threshold: 30,
        }),
    },
);
