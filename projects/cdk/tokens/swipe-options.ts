import {InjectionToken} from '@angular/core';
import {TuiSwipeOptions} from '../interfaces/swipe';

export const TUI_SWIPE_OPTIONS = new InjectionToken<TuiSwipeOptions>('Swipe options', {
    factory: () => ({timeout: 500, treshold: 30}),
});
