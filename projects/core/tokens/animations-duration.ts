import {tuiCreateToken} from '@taiga-ui/cdk';

export const TUI_ANIMATIONS_DEFAULT_DURATION = 300;

/**
 * Duration of all Taiga UI animations in ms
 */
export const TUI_ANIMATIONS_DURATION = tuiCreateToken(TUI_ANIMATIONS_DEFAULT_DURATION);
