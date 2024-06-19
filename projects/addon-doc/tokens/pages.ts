import type {InjectionToken} from '@angular/core';
import {inject} from '@angular/core';
import type {TuiDocRoutePage, TuiDocRoutePages} from '@taiga-ui/addon-doc/types';
import {tuiToFlatMapPages} from '@taiga-ui/addon-doc/utils';
import {tuiCreateToken, tuiCreateTokenFromFactory} from '@taiga-ui/cdk';

/**
 * Documentation pages
 */
export const TUI_DOC_PAGES = tuiCreateToken<TuiDocRoutePages>([]);

export const TUI_DOC_MAP_PAGES: InjectionToken<Map<string, TuiDocRoutePage>> =
    tuiCreateTokenFromFactory(() => tuiToFlatMapPages(inject(TUI_DOC_PAGES)));
