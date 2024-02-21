import {DOCUMENT} from '@angular/common';
import {ElementRef, inject, Injectable} from '@angular/core';
import {TuiSwipe} from '@taiga-ui/cdk/interfaces';
import {tuiTypedFromEvent} from '@taiga-ui/cdk/observables';
import {TUI_SWIPE_OPTIONS} from '@taiga-ui/cdk/tokens';
import {tuiGetSwipeDirection, tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import {filter, map, merge, Observable, pairwise} from 'rxjs';

@Injectable()
export class TuiSwipeService extends Observable<TuiSwipe> {
    constructor() {
        const doc = inject(DOCUMENT);
        const nativeElement = inject(ElementRef<Element>).nativeElement;
        const {timeout, threshold} = inject(TUI_SWIPE_OPTIONS);

        super(subscriber => {
            merge(
                tuiTypedFromEvent(nativeElement, 'touchstart', {passive: true}),
                tuiTypedFromEvent(doc, 'touchend'),
            )
                .pipe(
                    pairwise(),
                    filter(
                        ([first, second]) =>
                            !!first.touches.length &&
                            first.touches[0].identifier ===
                                second.changedTouches[0].identifier,
                    ),
                    map(([start, end]) => {
                        const startX = start.touches[0].clientX;
                        const startY = start.touches[0].clientY;
                        const endX = end.changedTouches[0].clientX;
                        const endY = end.changedTouches[0].clientY;

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
                .subscribe(subscriber);
        });
    }
}
