import {InjectionToken} from '@angular/core';

export const TUI_ANIMATIONS_DURATION = new InjectionToken<number>(
    `Duration of all Taiga UI animations in ms`,
    {
        factory: () => 300,
    },
);
