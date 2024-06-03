import {DOCUMENT} from '@angular/common';
import {inject, Injectable} from '@angular/core';
import {tuiTypedFromEvent} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {
    filter,
    map,
    merge,
    Observable,
    pairwise,
    repeat,
    switchMap,
    takeUntil,
} from 'rxjs';

@Injectable()
export class TuiPanService extends Observable<readonly [number, number]> {
    constructor() {
        const el = tuiInjectElement();
        const doc = inject(DOCUMENT);

        super(subscriber => {
            merge(
                tuiTypedFromEvent(el, 'touchstart', {passive: true}),
                tuiTypedFromEvent(el, 'mousedown'),
            )
                .pipe(
                    switchMap(() =>
                        merge(
                            tuiTypedFromEvent(doc, 'touchmove', {
                                passive: true,
                            }).pipe(
                                filter(({touches}) => touches.length < 2),
                                map(({touches}) => touches[0]),
                            ),
                            tuiTypedFromEvent(doc, 'mousemove'),
                        ),
                    ),
                    pairwise(),
                    map(([first, second]) => {
                        const deltaX = second.clientX - first.clientX;
                        const deltaY = second.clientY - first.clientY;

                        return [deltaX, deltaY] as [number, number];
                    }),
                    takeUntil(
                        merge(
                            tuiTypedFromEvent(doc, 'touchend'),
                            tuiTypedFromEvent(doc, 'mouseup'),
                        ),
                    ),
                    repeat(),
                )
                .subscribe(subscriber);
        });
    }
}
