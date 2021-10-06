import {NgZone} from '@angular/core';
import {tuiZonefree, typedFromEvent} from '@taiga-ui/cdk';
import {concat, Observable} from 'rxjs';
import {map, share, switchMap, take, takeUntil} from 'rxjs/operators';

export function isoScrollFactory(
    element: HTMLElement,
    documentRef: Document,
    ngZone: NgZone,
): Observable<number> {
    const touchstart$ = typedFromEvent(element, 'touchstart', {passive: true});
    const touchmove$ = typedFromEvent(documentRef, 'touchmove', {passive: true});
    const touchend$ = typedFromEvent(documentRef, 'touchend');
    const scroll$ = typedFromEvent(element, 'scroll').pipe(map(() => element.scrollTop));
    const result$ = touchstart$.pipe(
        switchMap(({touches}) => {
            const {screenY} = touches[0];
            const {scrollTop} = element;

            return concat(
                touchmove$.pipe(
                    map(({touches}) => scrollTop + screenY - touches[0].screenY),
                    takeUntil(touchend$),
                ),
                scroll$,
            );
        }),
    );

    return concat(scroll$.pipe(take(1)), result$).pipe(tuiZonefree(ngZone), share());
}
