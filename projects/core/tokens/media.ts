/* eslint-disable perfectionist/sort-objects */
import {tuiCreateToken} from '@taiga-ui/cdk';
import {TuiMedia} from '@taiga-ui/core/interfaces';

/**
 * Token for media constant
 */
export const TUI_MEDIA = tuiCreateToken<TuiMedia>({
    // TODO: bug? order fields affects the unit test
    mobile: 768,
    desktopSmall: 1024,
    desktopLarge: 1280,
});
