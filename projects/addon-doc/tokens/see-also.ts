import {InjectionToken} from '@angular/core';

/**
 * Array of arrays of related pages
 */
export const TUI_DOC_SEE_ALSO = new InjectionToken<ReadonlyArray<readonly string[]>>(
    ngDevMode ? 'TUI_DOC_SEE_ALSO' : '',
    {
        factory: () => [],
    },
);
