import {inject} from '@angular/core';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk/utils/miscellaneous';

import {TUI_REDUCED_MOTION} from './reduced-motion';

/**
 * Speed of all Taiga UI animations. 1 equals 300ms.
 */
export const TUI_ANIMATIONS_SPEED = tuiCreateTokenFromFactory<number>(() =>
    inject(TUI_REDUCED_MOTION) ? 0 : 1,
);
