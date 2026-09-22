import {InjectionToken} from '@angular/core';

/**
 * Current library version.
 */
export const TUI_DOC_VERSION = new InjectionToken(ngDevMode ? 'TUI_DOC_VERSION' : '', {
    factory: () => '',
});
