import {InjectionToken} from '@angular/core';
import {TuiSwipeOptions} from '@taiga-ui/cdk/interfaces';

export const TUI_SWIPE_OPTIONS = new InjectionToken<TuiSwipeOptions>(
    `[TUI_SWIPE_OPTIONS]: Swipe options`,
    {
        factory: () => ({timeout: 500, threshold: 30}),
    },
);
