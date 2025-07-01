import {inject} from '@angular/core';
import type {TuiDocRoutePage, TuiDocRoutePages} from '@taiga-ui/addon-doc/types';
import {tuiToFlatMapPages} from '@taiga-ui/addon-doc/utils';
import {InjectionToken} from '@angular/core';

/**
 * Documentation pages
 */
export const TUI_DOC_PAGES = new InjectionToken<TuiDocRoutePages>(
    ngDevMode ? 'TUI_DOC_PAGES' : '',
    {
        factory: () => [],
    },
);

export const TUI_DOC_MAP_PAGES: InjectionToken<Map<string, TuiDocRoutePage>> =
    new InjectionToken(ngDevMode ? 'TUI_DOC_MAP_PAGES' : '', {
        factory: () => tuiToFlatMapPages(inject(TUI_DOC_PAGES)),
    });
