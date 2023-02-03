import {InjectionToken} from '@angular/core';

/**
 * @deprecated Use {@link TUI_SVG_OPTIONS} instead
 */
export const TUI_ICONS_PLACE: InjectionToken<string> = new InjectionToken<string>(
    `[TUI_ICONS_PLACE]: Paths to icons`,
    {
        factory: () => `assets/taiga-ui/icons`,
    },
);
