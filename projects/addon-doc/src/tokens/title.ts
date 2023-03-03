import {InjectionToken} from '@angular/core';

/**
 * Page title prefix
 */
export const TUI_DOC_TITLE = new InjectionToken<string>(`[TUI_DOC_TITLE]`, {
    factory: () => ``,
});
