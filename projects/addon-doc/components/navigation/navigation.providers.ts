import {InjectionToken, type Provider} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {ActivatedRoute, type Event, NavigationEnd, Router, Scroll} from '@angular/router';
import {TUI_DOC_PAGES, TUI_DOC_TITLE} from '@taiga-ui/addon-doc/tokens';
import {type TuiDocRoutePages} from '@taiga-ui/addon-doc/types';
import {tuiAutoFocusOptionsProvider} from '@taiga-ui/cdk/directives/auto-focus';
import {tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiLinkOptionsProvider} from '@taiga-ui/core/components/link';
import {tuiScrollbarOptionsProvider} from '@taiga-ui/core/components/scrollbar';
import {filter, map, mergeMap, type Observable} from 'rxjs';

function labelsProviderFactory(pages: TuiDocRoutePages): readonly string[] {
    return pages
        .map(({section}) => section)
        .filter(tuiIsPresent)
        .filter((item, index, array) => array.indexOf(item) === index);
}

/**
 * Page title
 */
export const NAVIGATION_TITLE = new InjectionToken<Observable<string>>(
    ngDevMode ? 'NAVIGATION_TITLE' : '',
);

/**
 * Navigation sections labels for search
 */
export const NAVIGATION_LABELS = new InjectionToken<readonly string[]>(
    ngDevMode ? 'NAVIGATION_LABELS' : '',
);

/**
 * Navigation pages
 */
export const NAVIGATION_ITEMS = new InjectionToken<readonly TuiDocRoutePages[]>(
    ngDevMode ? 'NAVIGATION_ITEMS' : '',
);

export const NAVIGATION_PROVIDERS: Provider[] = [
    tuiAutoFocusOptionsProvider({preventScroll: true}),
    tuiLinkOptionsProvider({appearance: 'action-grayscale'}),
    {
        provide: NAVIGATION_TITLE,
        deps: [Router, ActivatedRoute, TUI_DOC_TITLE],
        useFactory: (
            router: Router,
            activatedRoute: ActivatedRoute,
            titlePrefix: string,
        ): Observable<string> =>
            router.events.pipe(
                filter(
                    (event: Event) =>
                        event instanceof NavigationEnd ||
                        (event instanceof Scroll
                            ? event.routerEvent instanceof NavigationEnd
                            : false),
                ),
                map(() => activatedRoute.firstChild),
                filter(tuiIsPresent),
                mergeMap(({data}) => data),
                map(({title}) => `${titlePrefix}${title}`),
                takeUntilDestroyed(),
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
        useFactory: (pages: TuiDocRoutePages): readonly TuiDocRoutePages[] => {
            const labels = labelsProviderFactory(pages);

            return [
                ...labels.map((label) => pages.filter(({section}) => section === label)),
                pages.filter((page) => !page.section),
            ];
        },
    },
    tuiScrollbarOptionsProvider({
        mode: 'hover',
    }),
];
