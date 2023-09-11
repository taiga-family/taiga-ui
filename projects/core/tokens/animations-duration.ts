import {inject} from '@angular/core';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk';

import {TUI_REDUCED_MOTION} from './reduced-motion';

export const TUI_ANIMATIONS_DEFAULT_DURATION = 300;

/**
 * Duration of all Taiga UI animations in ms
 */
export const TUI_ANIMATIONS_DURATION = tuiCreateTokenFromFactory(() =>
    inject(TUI_REDUCED_MOTION) ? 0 : TUI_ANIMATIONS_DEFAULT_DURATION,
);
