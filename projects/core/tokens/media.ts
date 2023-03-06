import {InjectionToken} from '@angular/core';
import {TuiMedia} from '@taiga-ui/core/interfaces';

/**
 * Token for media constant
 */
export const TUI_MEDIA = new InjectionToken<TuiMedia>(`[TUI_MEDIA]`, {
    factory: () => ({
        mobile: 768,
        desktopSmall: 1024,
        desktopLarge: 1280,
    }),
});
