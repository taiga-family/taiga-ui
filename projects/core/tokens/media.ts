import {InjectionToken} from '@angular/core';

export interface TuiMedia {
    readonly desktopLarge: number;
    readonly desktopSmall: number;
    readonly mobile: number;
    readonly tablet?: number;
}

/**
 * Token for media constant
 */
export const TUI_MEDIA = new InjectionToken<TuiMedia>(ngDevMode ? 'TUI_MEDIA' : '', {
    factory: () => ({
        mobile: 768,
        desktopSmall: 1280,
        desktopLarge: Infinity,
    }),
});
