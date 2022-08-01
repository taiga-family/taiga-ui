import {Inject, Injectable} from '@angular/core';
import {ANIMATION_FRAME, PERFORMANCE} from '@ng-web-apis/common';
import {tuiAssert} from '@taiga-ui/cdk/classes';
import {clamp} from '@taiga-ui/cdk/utils/math';
import {easeInOutQuad} from '@taiga-ui/cdk/utils/miscellaneous';
import {defer, Observable, of, timer} from 'rxjs';
import {map, switchMap, takeUntil, tap} from 'rxjs/operators';

const SCROLL_TIME = 300;

@Injectable({
    providedIn: `root`,
})
export class TuiScrollService {
    constructor(
        @Inject(PERFORMANCE) private readonly performanceRef: Performance,
        @Inject(ANIMATION_FRAME) private readonly animationFrame$: Observable<number>,
    ) {}

    scroll$(
        element: Element,
        scrollTop: number,
        scrollLeft: number = element.scrollLeft,
        duration: number = SCROLL_TIME,
    ): Observable<[number, number]> {
        tuiAssert.assert(duration >= 0, `Duration cannot be negative`);
        tuiAssert.assert(scrollTop >= 0, `scrollTop cannot be negative`);
        tuiAssert.assert(scrollLeft >= 0, `scrollLeft cannot be negative`);

        const initialTop = element.scrollTop;
        const initialLeft = element.scrollLeft;
        const deltaTop = scrollTop - initialTop;
        const deltaLeft = scrollLeft - initialLeft;
        const observable = !duration
            ? of([scrollTop, scrollLeft] as [number, number])
            : defer(() => of(this.performanceRef.now())).pipe(
                  switchMap(start => this.animationFrame$.pipe(map(now => now - start))),
                  map(elapsed => easeInOutQuad(clamp(elapsed / duration, 0, 1))),
                  map(
                      percent =>
                          [
                              initialTop + deltaTop * percent,
                              initialLeft + deltaLeft * percent,
                          ] as [number, number],
                  ),
                  takeUntil(timer(duration)),
              );

        return observable.pipe(
            tap(([scrollTop, scrollLeft]) => {
                element.scrollTop = scrollTop;
                element.scrollLeft = scrollLeft;
            }),
        );
    }
}
