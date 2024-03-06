import {tuiCreateToken} from '@taiga-ui/cdk';
import type {TuiMedia} from '@taiga-ui/core/interfaces';

/**
 * Token for media constant
 */
export const TUI_MEDIA = tuiCreateToken<TuiMedia>({
    mobile: 768,
    desktopSmall: 1024,
    desktopLarge: 1280,
});
