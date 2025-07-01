import {inject, InjectionToken} from '@angular/core';
import type {TuiDocRoutePage, TuiDocRoutePages} from '@taiga-ui/addon-doc/types';
import {tuiToFlatMapPages} from '@taiga-ui/addon-doc/utils';

/**
 * Documentation pages
 */
export const TUI_DOC_PAGES = new InjectionToken<TuiDocRoutePages>(
    ngDevMode ? 'TUI_DOC_PAGES' : '',
    {
        factory: () => [],
    },
);

export const TUI_DOC_MAP_PAGES = new InjectionToken<Map<string, TuiDocRoutePage>>(
    ngDevMode ? 'TUI_DOC_MAP_PAGES' : '',
    {
        factory: () => tuiToFlatMapPages(inject(TUI_DOC_PAGES)),
    },
);
