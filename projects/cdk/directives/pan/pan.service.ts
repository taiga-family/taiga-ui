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

        super((subscriber) =>
            merge(tuiTypedFromEvent(el, 'pointerdown'))
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
                        const deltaX = (second?.clientX ?? 0) - (first?.clientX ?? 0);
                        const deltaY = (second?.clientY ?? 0) - (first?.clientY ?? 0);

                        return [deltaX, deltaY] as [number, number];
                    }),
                    takeUntil(tuiTypedFromEvent(doc, 'pointerup')),
                    repeat(),
                )
                .subscribe(subscriber),
        );
    }
}
