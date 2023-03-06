import {InjectionToken} from '@angular/core';

/**
 * Duration of all Taiga UI animations in ms
 */
export const TUI_ANIMATIONS_DURATION = new InjectionToken<number>(
    `[TUI_ANIMATIONS_DURATION]`,
    {
        factory: () => 300,
    },
);
