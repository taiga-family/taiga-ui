import {inject, InjectionToken} from '@angular/core';
import type {TuiDocPage} from '@taiga-ui/addon-doc/interfaces';
import type {TuiDocPages} from '@taiga-ui/addon-doc/types';
import {tuiToFlatMapPages} from '@taiga-ui/addon-doc/utils';
import {tuiCreateToken} from '@taiga-ui/cdk';

/**
 * Documentation pages
 */
export const TUI_DOC_PAGES = tuiCreateToken<TuiDocPages>([]);

export const TUI_DOC_MAP_PAGES = new InjectionToken<Map<string, TuiDocPage>>(
    `[TUI_DOC_MAP_PAGES]`,
    {
        factory: () => tuiToFlatMapPages(inject(TUI_DOC_PAGES)),
    },
);
