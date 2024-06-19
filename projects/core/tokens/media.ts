import {tuiCreateToken} from '@taiga-ui/cdk/utils/miscellaneous';

export interface TuiMedia {
    readonly desktopLarge: number;
    readonly desktopSmall: number;
    readonly mobile: number;
    readonly tablet?: number;
}

/**
 * Token for media constant
 */
export const TUI_MEDIA = tuiCreateToken<TuiMedia>({
    mobile: 768,
    desktopSmall: 1024,
    desktopLarge: 1280,
});
