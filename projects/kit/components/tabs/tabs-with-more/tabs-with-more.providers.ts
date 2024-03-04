import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectorRef,
    ElementRef,
    InjectionToken,
    type Provider,
} from '@angular/core';
import {
    MUTATION_OBSERVER_INIT,
    MutationObserverService,
} from '@ng-web-apis/mutation-observer';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {tuiDropdownOptionsProvider} from '@taiga-ui/core';
import {
    debounceTime,
    filter,
    merge,
    type Observable,
    startWith,
    takeUntil,
    tap,
} from 'rxjs';

export const TUI_TABS_REFRESH = new InjectionToken<Observable<unknown>>(
    '[TUI_TABS_REFRESH]',
);
export const TUI_TABS_PROVIDERS: Provider[] = [
    TuiDestroyService,
    ResizeObserverService,
    MutationObserverService,
    tuiDropdownOptionsProvider({align: 'right'}),
    {
        provide: MUTATION_OBSERVER_INIT,
        useValue: {
            childList: true,
            subtree: true,
            characterData: true,
        },
    },
    {
        provide: TUI_TABS_REFRESH,
        deps: [
            ResizeObserverService,
            MutationObserverService,
            TuiDestroyService,
            DOCUMENT,
            ElementRef,
            ChangeDetectorRef,
        ],
        useFactory: (
            resize$: Observable<unknown>,
            mutations$: Observable<unknown>,
            destroy$: Observable<unknown>,
            {body}: Document,
            {nativeElement}: ElementRef<Node>,
            cdr: ChangeDetectorRef,
        ): Observable<unknown> =>
            merge(resize$, mutations$.pipe(tap(() => cdr.detectChanges()))).pipe(
                // Ignoring cases when host is detached from DOM
                filter(() => body.contains(nativeElement)),
                debounceTime(0),
                startWith(null),
                takeUntil(destroy$),
            ),
    },
];
