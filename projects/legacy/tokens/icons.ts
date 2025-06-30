import {InjectionToken} from '@angular/core';

/**
 * @deprecated: drop in v5.0
 * A key/value dictionary of icon names and src to be defined with TuiSvgService
 */
export const TUI_ICON_STARTS = new InjectionToken<Record<string, string>>(
    'TUI_ICON_STARTS',
    {
        factory: () => ({}),
    },
);
