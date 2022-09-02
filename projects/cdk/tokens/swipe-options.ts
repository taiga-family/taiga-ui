import {InjectionToken} from '@angular/core';
import type {TuiSwipeOptions} from '@taiga-ui/cdk/interfaces';

export const TUI_SWIPE_OPTIONS = new InjectionToken<TuiSwipeOptions>(`Swipe options`, {
    factory: () => ({timeout: 500, threshold: 30}),
});
