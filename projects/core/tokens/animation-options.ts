import {AnimationOptions} from '@angular/animations';
import {inject, InjectionToken} from '@angular/core';

import {TUI_ANIMATIONS_DURATION} from './animations-duration';

export const TUI_ANIMATION_OPTIONS = new InjectionToken<AnimationOptions>(
    `[TUI_ANIMATION_OPTIONS]: Options for Taiga UI animations`,
    {
        factory: () => ({
            params: {
                duration: inject(TUI_ANIMATIONS_DURATION),
            },
        }),
    },
);
