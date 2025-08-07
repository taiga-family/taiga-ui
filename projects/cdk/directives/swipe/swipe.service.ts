import {DOCUMENT} from '@angular/common';
import {inject, Injectable} from '@angular/core';
import {tuiTypedFromEvent} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import {filter, map, merge, Observable, pairwise} from 'rxjs';

import {TUI_SWIPE_OPTIONS} from './swipe.options';
import {type TuiSwipeDirection, type TuiSwipeEvent} from './swipe.types';

@Injectable()
export class TuiSwipeService extends Observable<TuiSwipeEvent> {
    constructor() {
        const doc = inject(DOCUMENT);
        const el = tuiInjectElement();
        const {timeout, threshold} = inject(TUI_SWIPE_OPTIONS);

        super((subscriber) =>
            merge(
                tuiTypedFromEvent(el, 'touchstart', {passive: true}),
                tuiTypedFromEvent(doc, 'touchend'),
            )
                .pipe(
                    pairwise(),
                    filter(
                        ([first, second]) =>
                            !!first.touches.length &&
                            first.touches[0]?.identifier ===
                                second.changedTouches[0]?.identifier,
                    ),
                    map(([start, end]) => {
                        const startX = start.touches[0]?.clientX ?? 0;
                        const startY = start.touches[0]?.clientY ?? 0;
                        const endX = end.changedTouches[0]?.clientX ?? 0;
                        const endY = end.changedTouches[0]?.clientY ?? 0;

                        const distanceX = startX - endX;
                        const distanceY = startY - endY;
                        const duration = end.timeStamp - start.timeStamp;

                        if (
                            (Math.abs(distanceX) > threshold ||
                                Math.abs(distanceY) > threshold) &&
                            duration < timeout
                        ) {
                            return {
                                direction: tuiGetSwipeDirection(distanceX, distanceY),
                                events: [start, end] as [TouchEvent, TouchEvent],
                            };
                        }

                        return null;
                    }),
                    filter(tuiIsPresent),
                )
                .subscribe(subscriber),
        );
    }
}

function tuiGetSwipeDirection(deltaX: number, deltaY: number): TuiSwipeDirection {
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
        return deltaY > 0 ? 'top' : 'bottom';
    }

    return deltaX > 0 ? 'left' : 'right';
}
