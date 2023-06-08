import {InjectionToken} from '@angular/core';

export const TUI_DEFAULT_ICONS_PLACE = `assets/taiga-ui/icons` as const;

/**
 * Path to icons
 * @deprecated Use {@link TUI_SVG_OPTIONS} instead
 */
export const TUI_ICONS_PLACE: InjectionToken<string> = new InjectionToken<string>(
    `[TUI_ICONS_PLACE]`,
    {
        factory: () => TUI_DEFAULT_ICONS_PLACE,
    },
);
