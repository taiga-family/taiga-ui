import {NgZone} from '@angular/core';
import {tuiZonefree, typedFromEvent} from '@taiga-ui/cdk';
import {concat, merge, Observable, race, timer, zip} from 'rxjs';
import {
    debounceTime,
    delay,
    filter,
    map,
    mapTo,
    share,
    startWith,
    switchMap,
    switchMapTo,
    take,
    takeUntil,
} from 'rxjs/operators';

/**
 * @deprecated: use {@link tuiIosScrollFactory} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function iosScrollFactory(
    element: HTMLElement,
    documentRef: Document,
    ngZone: NgZone,
): Observable<number> {
    const load$ = typedFromEvent(element, 'load', {capture: true});
    const touchstart$ = typedFromEvent(element, 'touchstart', {passive: true});
    const touchmove$ = typedFromEvent(documentRef, 'touchmove', {passive: true});
    const touchend$ = typedFromEvent(documentRef, 'touchend');
    const scroll$ = typedFromEvent(element, 'scroll').pipe(map(() => element.scrollTop));
    const result$ = merge(
        load$.pipe(
            delay(0),
            map(() => element.scrollTop),
        ),
        touchstart$.pipe(
            switchMap(({touches}) => {
                const {screenY} = touches[0];
                const {scrollTop} = element;

                return concat(
                    // Sometimes touch is triggered without scroll in iOS, filter that
                    zip(touchmove$, scroll$).pipe(
                        map(([{touches}]) => scrollTop + screenY - touches[0].screenY),
                        takeUntil(touchend$),
                    ),
                    scroll$,
                );
            }),
        ),
    );

    return concat(scroll$.pipe(take(1)), result$).pipe(tuiZonefree(ngZone), share());
}

export const tuiIosScrollFactory = iosScrollFactory;

/**
 * @deprecated: use {@link tuiProcessDragged} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function processDragged(
    dragged$: Observable<boolean>,
    scroll$: Observable<unknown>,
): Observable<boolean> {
    const touchstart$ = dragged$.pipe(filter(Boolean));
    const touchend$ = dragged$.pipe(filter(v => !v));
    const race$ = race(scroll$, timer(100)).pipe(
        debounceTime(200),
        take(1),
        mapTo(false),
    );

    return touchstart$.pipe(
        switchMapTo(touchend$.pipe(switchMapTo(race$), startWith(true))),
        startWith(false),
    );
}

export const tuiProcessDragged = processDragged;

/**
 * @deprecated: use {@link tuiFakeSmoothScroll} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function fakeSmoothScroll({style}: HTMLElement, offset: number): void {
    style.transition = 'none';
    style.transform = `scaleX(-1) translate3d(0, ${offset}px, 0)`;

    setTimeout(() => {
        style.transition = '';
        style.transform = '';
    });
}

export const tuiFakeSmoothScroll = fakeSmoothScroll;
