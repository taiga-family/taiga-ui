import {InjectionToken} from '@angular/core';

/**
 * Page title prefix
 */
export const TUI_DOC_TITLE = new InjectionToken(ngDevMode ? 'TUI_DOC_TITLE' : '', {
    factory: () => '',
});
