import {ElementRef, Inject, Injectable} from '@angular/core';
import {TuiSwipe, TuiSwipeOptions} from '@taiga-ui/cdk/interfaces';
import {typedFromEvent} from '@taiga-ui/cdk/observables';
import {TUI_SWIPE_OPTIONS} from '@taiga-ui/cdk/tokens';
import {isPresent} from '@taiga-ui/cdk/utils';
import {getSwipeDirection} from '@taiga-ui/cdk/utils/miscellaneous';
import {merge, Observable} from 'rxjs';
import {filter, map, pairwise, takeUntil} from 'rxjs/operators';
import {TuiDestroyService} from './destroy.service';

/**
 * @dynamic
 */
@Injectable()
export class TuiSwipeService extends Observable<TuiSwipe> {
    constructor(
        @Inject(ElementRef) {nativeElement}: ElementRef<Element>,
        @Inject(TUI_SWIPE_OPTIONS) {timeout, threshold}: TuiSwipeOptions,
        @Inject(TuiDestroyService) destroy$: TuiDestroyService,
    ) {
        const {ownerDocument} = nativeElement;

        if (!ownerDocument) {
            throw new Error('element does not have ownerDocument');
        }

        super(subscriber => {
            merge(
                typedFromEvent(nativeElement, 'touchstart', {passive: true}),
                typedFromEvent(ownerDocument, 'touchend'),
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
                    takeUntil(destroy$),
                )
                .subscribe(subscriber);
        });
    }
}
