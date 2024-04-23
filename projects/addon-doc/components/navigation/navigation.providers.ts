import type {Provider} from '@angular/core';
import {InjectionToken} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {TUI_DOC_PAGES, TUI_DOC_TITLE} from '@taiga-ui/addon-doc/tokens';
import type {TuiDocPages} from '@taiga-ui/addon-doc/types';
import {tuiIsPresent} from '@taiga-ui/cdk';
import {tuiLinkOptionsProvider} from '@taiga-ui/core';
import type {Observable} from 'rxjs';
import {filter, map, mergeMap} from 'rxjs';

function labelsProviderFactory(pages: TuiDocPages): readonly string[] {
    return pages
        .map(({section}) => section)
        .filter(tuiIsPresent)
        .filter((item, index, array) => array.indexOf(item) === index);
}

/**
 * Page title
 */
export const NAVIGATION_TITLE = new InjectionToken<Observable<string>>(
    '[NAVIGATION_TITLE]',
);

/**
 * Navigation sections labels for search
 */
export const NAVIGATION_LABELS = new InjectionToken<readonly string[]>(
    '[NAVIGATION_LABELS]',
);

/**
 * Navigation pages
 */
export const NAVIGATION_ITEMS: InjectionToken<readonly TuiDocPages[]> =
    new InjectionToken<readonly TuiDocPages[]>('[NAVIGATION_ITEMS]');

export const NAVIGATION_PROVIDERS: Provider[] = [
    tuiLinkOptionsProvider({appearance: 'icon'}),
    {
        provide: NAVIGATION_TITLE,
        deps: [Router, ActivatedRoute, TUI_DOC_TITLE],
        useFactory: (
            router: Router,
            activatedRoute: ActivatedRoute,
            titlePrefix: string,
        ): Observable<string> =>
            router.events.pipe(
                filter(event => event instanceof NavigationEnd),
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
        useFactory: (pages: TuiDocPages): readonly TuiDocPages[] => {
            const labels = labelsProviderFactory(pages);

            return [
                ...labels.map(label => pages.filter(({section}) => section === label)),
                pages.filter(page => !page.section),
            ];
        },
    },
];
