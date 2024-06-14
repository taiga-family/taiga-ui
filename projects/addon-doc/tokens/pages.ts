import type {InjectionToken} from '@angular/core';
import {inject} from '@angular/core';
import type {TuiDocPageRoute, TuiDocPages} from '@taiga-ui/addon-doc/types';
import {tuiToFlatMapPages} from '@taiga-ui/addon-doc/utils';
import {tuiCreateToken, tuiCreateTokenFromFactory} from '@taiga-ui/cdk';

/**
 * Documentation pages
 */
export const TUI_DOC_PAGES = tuiCreateToken<TuiDocPages>([]);

export const TUI_DOC_MAP_PAGES: InjectionToken<Map<string, TuiDocPageRoute>> =
    tuiCreateTokenFromFactory(() => tuiToFlatMapPages(inject(TUI_DOC_PAGES)));
