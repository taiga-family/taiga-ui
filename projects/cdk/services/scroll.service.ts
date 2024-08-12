/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
import {inject, Injectable} from '@angular/core';
import {WA_ANIMATION_FRAME, WA_PERFORMANCE} from '@ng-web-apis/common';
import {tuiClamp} from '@taiga-ui/cdk/utils/math';
import {tuiEaseInOutQuad} from '@taiga-ui/cdk/utils/miscellaneous';
import type {Observable} from 'rxjs';
import {defer, endWith, map, of, switchMap, takeUntil, tap, timer} from 'rxjs';

const SCROLL_TIME = 300;

function getX(elementOrWindow: Element | Window): number {
    return 'scrollX' in elementOrWindow
        ? elementOrWindow.scrollX
        : elementOrWindow.scrollLeft;
}

function getY(elementOrWindow: Element | Window): number {
    return 'scrollY' in elementOrWindow
        ? elementOrWindow.scrollY
        : elementOrWindow.scrollTop;
}

@Injectable({
    providedIn: 'root',
})
export class TuiScrollService {
    private readonly performanceRef = inject(WA_PERFORMANCE);
    private readonly animationFrame$ = inject(WA_ANIMATION_FRAME);

    public scroll$(
        elementOrWindow: Element | Window,
        scrollTop: number,
        scrollLeft: number = getX(elementOrWindow),
        duration: number = SCROLL_TIME,
    ): Observable<[number, number]> {
        ngDevMode && console.assert(duration >= 0, 'duration cannot be negative');
        ngDevMode && console.assert(scrollTop >= 0, 'scrollTop cannot be negative');
        ngDevMode && console.assert(scrollLeft >= 0, 'scrollLeft cannot be negative');

        const initialTop = getY(elementOrWindow);
        const initialLeft = getX(elementOrWindow);
        const deltaTop = scrollTop - initialTop;
        const deltaLeft = scrollLeft - initialLeft;
        const observable = !duration
            ? of<[number, number]>([scrollTop, scrollLeft])
            : defer(() => of(this.performanceRef.now())).pipe(
                  switchMap((start) =>
                      this.animationFrame$.pipe(map((now) => now - start)),
                  ),
                  map((elapsed) => tuiEaseInOutQuad(tuiClamp(elapsed / duration, 0, 1))),
                  map<number, [number, number]>((percent) => [
                      initialTop + deltaTop * percent,
                      initialLeft + deltaLeft * percent,
                  ]),
                  takeUntil(timer(duration)),
                  endWith<[number, number]>([scrollTop, scrollLeft]),
              );

        return observable.pipe(
            tap(([scrollTop, scrollLeft]) => {
                elementOrWindow.scrollTo?.(scrollLeft, scrollTop);
            }),
        );
    }
}
