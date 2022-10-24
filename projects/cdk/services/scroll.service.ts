import {Inject, Injectable} from '@angular/core';
import {ANIMATION_FRAME, PERFORMANCE} from '@ng-web-apis/common';
import {tuiAssert} from '@taiga-ui/cdk/classes';
import {tuiClamp} from '@taiga-ui/cdk/utils/math';
import {tuiEaseInOutQuad} from '@taiga-ui/cdk/utils/miscellaneous';
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
        elementOrWindow: Element | Window,
        scrollTop: number,
        scrollLeft: number = getX(elementOrWindow),
        duration: number = SCROLL_TIME,
    ): Observable<[number, number]> {
        tuiAssert.assert(duration >= 0, `Duration cannot be negative`);
        tuiAssert.assert(scrollTop >= 0, `scrollTop cannot be negative`);
        tuiAssert.assert(scrollLeft >= 0, `scrollLeft cannot be negative`);

        const initialTop = getY(elementOrWindow);
        const initialLeft = getX(elementOrWindow);
        const deltaTop = scrollTop - initialTop;
        const deltaLeft = scrollLeft - initialLeft;
        const observable = !duration
            ? of([scrollTop, scrollLeft] as [number, number])
            : defer(() => of(this.performanceRef.now())).pipe(
                  switchMap(start => this.animationFrame$.pipe(map(now => now - start))),
                  map(elapsed => tuiEaseInOutQuad(tuiClamp(elapsed / duration, 0, 1))),
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
                elementOrWindow.scrollTo?.(scrollLeft, scrollTop);
            }),
        );
    }
}

function getX(elementOrWindow: Element | Window): number {
    return `scrollX` in elementOrWindow
        ? elementOrWindow.scrollX
        : elementOrWindow.scrollLeft;
}

function getY(elementOrWindow: Element | Window): number {
    return `scrollY` in elementOrWindow
        ? elementOrWindow.scrollY
        : elementOrWindow.scrollTop;
}
