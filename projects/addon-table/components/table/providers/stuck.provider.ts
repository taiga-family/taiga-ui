import type {Provider} from '@angular/core';
import {DestroyRef, ElementRef, inject, InjectionToken} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {IntersectionObserverService} from '@ng-web-apis/intersection-observer';
import type {Observable} from 'rxjs';
import {catchError, map, of} from 'rxjs';

/**
 * Stream of sticky stuck events
 */
export const TUI_STUCK = new InjectionToken<Observable<boolean>>('[TUI_STUCK]');

export const TUI_STUCK_PROVIDER: Provider = {
    provide: TUI_STUCK,
    deps: [ElementRef, IntersectionObserverService],
    useFactory: (
        {nativeElement}: ElementRef<Element>,
        entries$: Observable<IntersectionObserverEntry[]>,
    ): Observable<boolean> => {
        const destroyRef = inject(DestroyRef);
        const stream$ = entries$.pipe(
            map(([{intersectionRatio}]) => intersectionRatio < 1),
        );

        stream$
            .pipe(
                catchError(() => of(false)), // SSR issue
                takeUntilDestroyed(destroyRef),
            )
            .subscribe(() => nativeElement.classList.add('_stuck'));

        return stream$;
    },
};
