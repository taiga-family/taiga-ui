import {DOCUMENT} from '@angular/common';
import {ElementRef, Inject, Injectable} from '@angular/core';
import {typedFromEvent} from '@taiga-ui/cdk/observables';
import {merge, Observable} from 'rxjs';
import {filter, map, pairwise, repeat, switchMapTo, takeUntil} from 'rxjs/operators';

/**
 * @dynamic
 */
@Injectable()
export class TuiPanService extends Observable<readonly [number, number]> {
    constructor(
        @Inject(ElementRef) {nativeElement}: ElementRef<Element>,
        @Inject(DOCUMENT) documentRef: Document,
    ) {
        super(subscriber => {
            merge(
                typedFromEvent(nativeElement, 'touchstart', {passive: true}),
                typedFromEvent(nativeElement, 'mousedown'),
            )
                .pipe(
                    switchMapTo(
                        merge(
                            typedFromEvent(documentRef, 'touchmove', {
                                passive: true,
                            }).pipe(
                                filter(({touches}) => touches.length < 2),
                                map(({touches}) => touches[0]),
                            ),
                            typedFromEvent(documentRef, 'mousemove'),
                        ),
                    ),
                    pairwise(),
                    map(([first, second]) => {
                        const deltaX = second.clientX - first.clientX;
                        const deltaY = second.clientY - first.clientY;

                        return [deltaX, deltaY] as [number, number];
                    }),
                    // eslint-disable-next-line rxjs/no-unsafe-takeuntil
                    takeUntil(
                        merge(
                            typedFromEvent(documentRef, 'touchend'),
                            typedFromEvent(documentRef, 'mouseup'),
                        ),
                    ),
                    repeat(),
                )
                .subscribe(subscriber);
        });
    }
}
