import {DOCUMENT} from '@angular/common';
import {ElementRef, Inject, Injectable} from '@angular/core';
import {TuiSwipe, TuiSwipeOptions} from '@taiga-ui/cdk/interfaces';
import {typedFromEvent} from '@taiga-ui/cdk/observables';
import {TUI_SWIPE_OPTIONS} from '@taiga-ui/cdk/tokens';
import {isPresent} from '@taiga-ui/cdk/utils';
import {getSwipeDirection} from '@taiga-ui/cdk/utils/miscellaneous';
import {merge, Observable} from 'rxjs';
import {filter, map, pairwise} from 'rxjs/operators';

/**
 * @dynamic
 */
@Injectable()
export class TuiSwipeService extends Observable<TuiSwipe> {
    constructor(
        @Inject(ElementRef) {nativeElement}: ElementRef<Element>,
        @Inject(TUI_SWIPE_OPTIONS) {timeout, threshold}: TuiSwipeOptions,
        @Inject(DOCUMENT) documentRef: Document,
    ) {
        super(subscriber => {
            merge(
                typedFromEvent(nativeElement, 'touchstart', {passive: true}),
                typedFromEvent(documentRef, 'touchend'),
            )
                .pipe(
                    pairwise(),
                    filter(([first]) => first.touches.length > 0),
                    map(([first, second]) => {
                        const startX = first.touches[0].clientX;
                        const startY = first.touches[0].clientY;
                        const endX = second.changedTouches[0].clientX;
                        const endY = second.changedTouches[0].clientY;

                        const duration = second.timeStamp - first.timeStamp;
                        const deltaX = startX - endX;
                        const deltaY = startY - endY;

                        if (
                            (Math.abs(deltaX) > threshold ||
                                Math.abs(deltaY) > threshold) &&
                            duration < timeout
                        ) {
                            return {
                                direction: getSwipeDirection(deltaX, deltaY),
                                start: first,
                                end: second,
                                duration,
                            };
                        }

                        return null;
                    }),
                    filter(isPresent),
                )
                .subscribe(subscriber);
        });
    }
}
