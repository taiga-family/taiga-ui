import {inject} from '@angular/core';
import {TUI_REDUCED_MOTION} from './reduced-motion';
import {InjectionToken} from '@angular/core';

/**
 * Speed of all Taiga UI animations. 1 equals 300ms.
 */
export const TUI_ANIMATIONS_SPEED = new InjectionToken<number>(
    ngDevMode ? 'TUI_ANIMATIONS_SPEED' : '',
    {
        factory: () => (inject(TUI_REDUCED_MOTION) ? 0 : 1),
    },
);
