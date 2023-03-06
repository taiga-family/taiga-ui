import {InjectionToken} from '@angular/core';
import {TuiSwipeOptions} from '@taiga-ui/cdk/interfaces';

/**
 * Swipe options
 */
export const TUI_SWIPE_OPTIONS = new InjectionToken<TuiSwipeOptions>(
    `[TUI_SWIPE_OPTIONS]`,
    {
        factory: () => ({timeout: 500, threshold: 30}),
    },
);
