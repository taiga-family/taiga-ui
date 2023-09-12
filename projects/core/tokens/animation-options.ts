import {AnimationOptions} from '@angular/animations';
import {inject} from '@angular/core';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk';

import {TUI_ANIMATIONS_DURATION} from './animations-duration';

/**
 * Options for Taiga UI animations
 */
export const TUI_ANIMATION_OPTIONS = tuiCreateTokenFromFactory<AnimationOptions>(() => ({
    value: ``,
    params: {
        duration: inject(TUI_ANIMATIONS_DURATION),
    },
}));
