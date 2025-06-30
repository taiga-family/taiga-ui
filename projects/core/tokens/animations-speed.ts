import {inject, InjectionToken} from '@angular/core';

import {TUI_REDUCED_MOTION} from './reduced-motion';

/**
 * Speed of all Taiga UI animations. 1 equals 300ms.
 */
export const TUI_ANIMATIONS_SPEED = new InjectionToken<number>('TUI_ANIMATIONS_SPEED', {
    factory: () => (inject(TUI_REDUCED_MOTION) ? 0 : 1),
});
