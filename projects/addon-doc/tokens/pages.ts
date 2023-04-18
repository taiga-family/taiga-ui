import {inject, InjectionToken} from '@angular/core';
import type {TuiDocPage} from '@taiga-ui/addon-doc/interfaces';
import type {TuiDocPages} from '@taiga-ui/addon-doc/types';
import {tuiToFlatMapPages} from '@taiga-ui/addon-doc/utils';

/**
 * Documentation pages
 */
export const TUI_DOC_PAGES: InjectionToken<TuiDocPages> = new InjectionToken<TuiDocPages>(
    `[TUI_DOC_PAGES]`,
    {
        factory: () => [],
    },
);

export const TUI_DOC_MAP_PAGES: InjectionToken<Map<string, TuiDocPage>> =
    new InjectionToken<Map<string, TuiDocPage>>(`[TUI_DOC_MAP_PAGES]`, {
        factory: () => {
            const pages: TuiDocPages = inject(TUI_DOC_PAGES);

            return tuiToFlatMapPages(pages);
        },
    });
