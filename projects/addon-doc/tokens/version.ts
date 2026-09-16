import {InjectionToken} from '@angular/core';

/**
 * Current library version used to derive "New"/"Updated" navigation badges.
 */
export const TUI_DOC_VERSION = new InjectionToken(ngDevMode ? 'TUI_DOC_VERSION' : '', {
    factory: () => '',
});
