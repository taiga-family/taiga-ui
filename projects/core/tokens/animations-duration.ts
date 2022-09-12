import {InjectionToken} from '@angular/core';

export const TUI_ANIMATIONS_DURATION = new InjectionToken<number>(
    `[TUI_ANIMATIONS_DURATION]: Duration of all Taiga UI animations in ms`,
    {
        factory: () => 300,
    },
);
