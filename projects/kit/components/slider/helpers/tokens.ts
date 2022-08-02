import {InjectionToken} from '@angular/core';

export const TUI_SLIDER_HAS_KEY_STEPS = new InjectionToken(
    `[TUI_SLIDER_HAS_KEY_STEPS] The Slider component uses [keySteps] directive`,
    {factory: () => false},
);
