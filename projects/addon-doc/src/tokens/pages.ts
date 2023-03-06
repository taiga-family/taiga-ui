import {InjectionToken} from '@angular/core';

import {TuiDocPages} from '../types/pages';

/**
 * Documentation pages
 */
export const TUI_DOC_PAGES: InjectionToken<TuiDocPages> = new InjectionToken<TuiDocPages>(
    `[TUI_DOC_PAGES]`,
    {
        factory: () => [],
    },
);
