import {DOCUMENT} from '@angular/common';
import type {Provider} from '@angular/core';
import {ChangeDetectorRef, ElementRef, InjectionToken} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {
    MUTATION_OBSERVER_INIT,
    MutationObserverService,
} from '@ng-web-apis/mutation-observer';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {tuiDropdownOptionsProvider} from '@taiga-ui/core/directives/dropdown';
import type {Observable} from 'rxjs';
import {debounceTime, filter, merge, startWith, tap} from 'rxjs';

export const TUI_TABS_REFRESH = new InjectionToken<Observable<unknown>>(
    '[TUI_TABS_REFRESH]',
);
export const TUI_TABS_PROVIDERS: Provider[] = [
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
            DOCUMENT,
            ElementRef,
            ChangeDetectorRef,
        ],
        useFactory: (
            resize$: Observable<unknown>,
            mutations$: Observable<unknown>,
            {body}: Document,
            {nativeElement}: ElementRef<Node>,
            cdr: ChangeDetectorRef,
        ): Observable<unknown> =>
            merge(resize$, mutations$.pipe(tap(() => cdr.detectChanges()))).pipe(
                // Ignoring cases when host is detached from DOM
                filter(() => body.contains(nativeElement)),
                debounceTime(0),
                startWith(null),
                takeUntilDestroyed(),
            ),
    },
];
