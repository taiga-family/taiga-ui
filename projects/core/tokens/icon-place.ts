import type {InjectionToken} from '@angular/core';
import {tuiCreateToken} from '@taiga-ui/cdk';

export const TUI_DEFAULT_ICONS_PLACE = 'assets/taiga-ui/icons' as const;

/**
 * Path to icons
 * @deprecated Use {@link TUI_SVG_OPTIONS} instead
 */
export const TUI_ICONS_PLACE: InjectionToken<string> = tuiCreateToken<string>(
    TUI_DEFAULT_ICONS_PLACE,
);
