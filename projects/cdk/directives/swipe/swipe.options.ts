import type {TuiSwipeOptions} from './swipe.types';
import {InjectionToken} from '@angular/core';

export const TUI_SWIPE_OPTIONS = new InjectionToken<TuiSwipeOptions>(
    'TUI_SWIPE_OPTIONS',
    {
        factory: () => ({
            timeout: 500,
            threshold: 30,
        }),
    },
);
