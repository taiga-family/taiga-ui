import {InjectionToken} from '@angular/core';

import {TuiDocPages} from '../types/pages';

export const TUI_DOC_PAGES: InjectionToken<TuiDocPages> = new InjectionToken<TuiDocPages>(
    `Documentation pages`,
    {
        factory: () => [],
    },
);
