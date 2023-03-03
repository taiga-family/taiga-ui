import {InjectionToken} from '@angular/core';

/**
 * Margin between tabs
 */
export const TUI_TAB_MARGIN = new InjectionToken<number>(`[TUI_TAB_MARGIN]`, {
    factory: () => 24,
});
