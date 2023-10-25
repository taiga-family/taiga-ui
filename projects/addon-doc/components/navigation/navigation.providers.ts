import {InjectionToken, Provider} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {TUI_DOC_PAGES, TUI_DOC_TITLE} from '@taiga-ui/addon-doc/tokens';
import {TuiDocPages} from '@taiga-ui/addon-doc/types';
import {TuiDestroyService, tuiIsPresent} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';
import {filter, map, mergeMap, takeUntil} from 'rxjs/operators';

/**
 * Page title
 */
export const TUI_NAVIGATION_TITLE = new InjectionToken<Observable<string>>(
    `[TUI_NAVIGATION_TITLE]`,
);

/**
 * @deprecated: use {@link TUI_NAVIGATION_TITLE}
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const NAVIGATION_TITLE = TUI_NAVIGATION_TITLE;

/**
 * Navigation sections labels for search
 */
export const TUI_NAVIGATION_LABELS = new InjectionToken<readonly string[]>(
    `[TUI_NAVIGATION_LABELS]`,
);

/**
 * @deprecated: use {@link TUI_NAVIGATION_LABELS}
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const NAVIGATION_LABELS = TUI_NAVIGATION_LABELS;

/**
 * Navigation pages
 */
export const TUI_NAVIGATION_ITEMS: InjectionToken<readonly TuiDocPages[]> =
    new InjectionToken<readonly TuiDocPages[]>(`[TUI_NAVIGATION_ITEMS]`);

/**
 * @deprecated: use {@link TUI_NAVIGATION_ITEMS}
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const NAVIGATION_ITEMS = TUI_NAVIGATION_ITEMS;

export const TUI_NAVIGATION_PROVIDERS: Provider[] = [
    TuiDestroyService,
    {
        provide: TUI_NAVIGATION_TITLE,
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
        provide: TUI_NAVIGATION_LABELS,
        deps: [TUI_DOC_PAGES],
        useFactory: labelsProviderFactory,
    },
    {
        provide: TUI_NAVIGATION_ITEMS,
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

/**
 * @deprecated: use {@link TUI_NAVIGATION_PROVIDERS}
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const NAVIGATION_PROVIDERS = TUI_NAVIGATION_PROVIDERS;

function labelsProviderFactory(pages: TuiDocPages): readonly string[] {
    return pages
        .map(({section}) => section)
        .filter(tuiIsPresent)
        .filter((item, index, array) => array.indexOf(item) === index);
}
