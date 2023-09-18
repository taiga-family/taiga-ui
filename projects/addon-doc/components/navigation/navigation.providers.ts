import {InjectionToken, Provider} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {TUI_DOC_PAGES, TUI_DOC_TITLE} from '@taiga-ui/addon-doc/tokens';
import {TuiDocPages} from '@taiga-ui/addon-doc/types';
import {TuiDestroyService, tuiIsPresent} from '@taiga-ui/cdk';
import {TuiSizeS} from '@taiga-ui/core';
import {Observable} from 'rxjs';
import {filter, map, mergeMap, takeUntil} from 'rxjs/operators';

/**
 * Page title
 */
export const NAVIGATION_TITLE = new InjectionToken<Observable<string>>(
    `[NAVIGATION_TITLE]`,
);

export interface TuiDocNavigationOptions {
    borders: 'all' | 'top-bottom' | null;
    closeOthers: boolean;
    showArrow: boolean;
    noPadding: boolean;
    disableHover: boolean;
    rounded: boolean;
    opened: boolean;
    size: TuiSizeS;
}

export const TUI_DOC_NAVIGATION_DEFAULT_OPTIONS: TuiDocNavigationOptions = {
    closeOthers: false,
    rounded: false,
    opened: false,
    noPadding: false,
    disableHover: false,
    showArrow: true,
    borders: null,
    size: `m`,
};

export const TUI_DOC_NAVIGATION_MENU_OPTIONS =
    new InjectionToken<TuiDocNavigationOptions>(`[TUI_DOC_NAVIGATION_MENU_OPTIONS]`, {
        factory: () => TUI_DOC_NAVIGATION_DEFAULT_OPTIONS,
    });

/**
 * Navigation sections labels for search
 */
export const NAVIGATION_LABELS = new InjectionToken<readonly string[]>(
    `[NAVIGATION_LABELS]`,
);

/**
 * Navigation pages
 */
export const NAVIGATION_ITEMS: InjectionToken<readonly TuiDocPages[]> =
    new InjectionToken<readonly TuiDocPages[]>(`[NAVIGATION_ITEMS]`);

export const NAVIGATION_PROVIDERS: Provider[] = [
    TuiDestroyService,
    {
        provide: NAVIGATION_TITLE,
        deps: [Router, ActivatedRoute, TUI_DOC_TITLE, TuiDestroyService],
        useFactory: (
            router: Router,
            activatedRoute: ActivatedRoute,
            titlePrefix: string,
            destroy$: Observable<void>,
        ): Observable<string> =>
            router.events.pipe(
                filter(event => event instanceof NavigationEnd),
                map(() => activatedRoute.firstChild),
                filter(tuiIsPresent),
                mergeMap(({data}) => data),
                map(({title}) => `${titlePrefix}${title}`),
                takeUntil(destroy$),
            ),
    },
    {
        provide: NAVIGATION_LABELS,
        deps: [TUI_DOC_PAGES],
        useFactory: labelsProviderFactory,
    },
    {
        provide: NAVIGATION_ITEMS,
        deps: [TUI_DOC_PAGES],
        useFactory: (pages: TuiDocPages): readonly TuiDocPages[] => {
            const labels = labelsProviderFactory(pages);

            return [
                ...labels.map(label => pages.filter(({section}) => section === label)),
                pages.filter(page => !page.section),
            ];
        },
    },
];

function labelsProviderFactory(pages: TuiDocPages): readonly string[] {
    return pages
        .map(({section}) => section)
        .filter(tuiIsPresent)
        .filter((item, index, array) => array.indexOf(item) === index);
}
