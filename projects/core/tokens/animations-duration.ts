import {InjectionToken} from '@angular/core';

export const TUI_ANIMATIONS_DEFAULT_DURATION = 300;

/**
 * Duration of all Taiga UI animations in ms
 */
export const TUI_ANIMATIONS_DURATION = new InjectionToken<number>(
    `[TUI_ANIMATIONS_DURATION]`,
    {
        factory: () => TUI_ANIMATIONS_DEFAULT_DURATION,
    },
);
