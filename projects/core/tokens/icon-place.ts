import {InjectionToken} from '@angular/core';

/**
 * Path to icons
 * @deprecated Use {@link TUI_SVG_OPTIONS} instead
 */
export const TUI_ICONS_PLACE: InjectionToken<string> = new InjectionToken<string>(
    `[TUI_ICONS_PLACE]`,
    {
        factory: () => `assets/taiga-ui/icons`,
    },
);
