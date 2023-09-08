import {inject} from '@angular/core';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk';
import {TUI_REDUCED_MOTION} from '@taiga-ui/core';

/**
 * Defines the transition animation for scroll
 */
export const TUI_DOC_SCROLL_BEHAVIOR = tuiCreateTokenFromFactory<ScrollBehavior>(() =>
    inject(TUI_REDUCED_MOTION) ? `auto` : `smooth`,
);
