import {InjectionToken} from '@angular/core';

/**
 * A key/value dictionary of icon names and src to be defined with TuiSvgService
 */
export const TUI_ICONS = new InjectionToken<Record<string, string>>(`[TUI_ICONS]`, {
    factory: () => ({}),
});
