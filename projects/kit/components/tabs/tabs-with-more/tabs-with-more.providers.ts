import {DOCUMENT} from '@angular/common';
import {ChangeDetectorRef, ElementRef, InjectionToken, Provider} from '@angular/core';
import {
    MUTATION_OBSERVER_INIT,
    MutationObserverService,
} from '@ng-web-apis/mutation-observer';
import {TuiDestroyService, TuiResizeService} from '@taiga-ui/cdk';
import {merge, Observable} from 'rxjs';
import {debounceTime, filter, startWith, takeUntil, tap} from 'rxjs/operators';

export function tabsRefreshFactory(
    resize$: Observable<unknown>,
    mutations$: Observable<unknown>,
    destroy$: Observable<unknown>,
    {body}: Document,
    {nativeElement}: ElementRef<Node>,
    changeDetectorRef: ChangeDetectorRef,
): Observable<unknown> {
    return merge(
        resize$,
        mutations$.pipe(tap(() => changeDetectorRef.detectChanges())),
    ).pipe(
        // Ignoring cases when host is detached from DOM
        filter(() => body.contains(nativeElement)),
        debounceTime(0),
        startWith(null),
        takeUntil(destroy$),
    );
}

export const TABS_REFRESH = new InjectionToken<Observable<unknown>>('Refresh stream');
export const TABS_PROVIDERS: Provider[] = [
    TuiResizeService,
    TuiDestroyService,
    MutationObserverService,
    {
        provide: MUTATION_OBSERVER_INIT,
        useValue: {
            childList: true,
            subtree: true,
        },
    },
    {
        provide: TABS_REFRESH,
        deps: [
            TuiResizeService,
            MutationObserverService,
            TuiDestroyService,
            DOCUMENT,
            ElementRef,
            ChangeDetectorRef,
        ],
        useFactory: tabsRefreshFactory,
    },
];
