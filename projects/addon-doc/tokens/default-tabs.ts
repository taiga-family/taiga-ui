import {InjectionToken} from '@angular/core';

/**
 * Array of default tab names
 */
export const TUI_DOC_DEFAULT_TABS = new InjectionToken<readonly string[]>(
    ngDevMode ? 'TUI_DOC_DEFAULT_TABS' : '',
    {
        factory: () => [],
    },
);
