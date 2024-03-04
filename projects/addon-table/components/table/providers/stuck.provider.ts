import {ElementRef, InjectionToken, type Provider} from '@angular/core';
import {IntersectionObserverService} from '@ng-web-apis/intersection-observer';
import {map, type Observable} from 'rxjs';
/**
 * Stream of sticky stuck events
 */
export const TUI_STUCK = new InjectionToken<Observable<boolean>>('[TUI_STUCK]');

export const TUI_STUCK_PROVIDER: Provider = {
    provide: TUI_STUCK,
    deps: [ElementRef, IntersectionObserverService],
    useFactory: (
        {nativeElement}: ElementRef,
        entries$: Observable<IntersectionObserverEntry[]>,
    ): Observable<boolean> => {
        const stream$ = entries$.pipe(
            map(([{intersectionRatio}]) => intersectionRatio < 1),
        );

        nativeElement['$.class._stuck'] = stream$;

        return stream$;
    },
};
