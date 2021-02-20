import {ElementRef, InjectionToken, Provider} from '@angular/core';
import {IntersectionObserverService} from '@ng-web-apis/intersection-observer';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export function stuckFactory(
    {nativeElement}: ElementRef,
    entries$: Observable<IntersectionObserverEntry[]>,
): Observable<boolean> {
    const stream$ = entries$.pipe(map(([{intersectionRatio}]) => intersectionRatio < 1));

    return (nativeElement['$.class._stuck'] = stream$);
}

export const TUI_STUCK = new InjectionToken<boolean>('Stream of sticky stuck events');

export const TUI_STUCK_PROVIDER: Provider = {
    provide: TUI_STUCK,
    deps: [ElementRef, IntersectionObserverService],
    useFactory: stuckFactory,
};
