import {ElementRef, Inject, Injectable} from '@angular/core';
import {TuiZoom} from '@taiga-ui/cdk/interfaces';
import {typedFromEvent} from '@taiga-ui/cdk/observables';
import {distanceBetweenTouches} from '@taiga-ui/cdk/utils';
import {Observable} from 'rxjs';
import {filter, map, merge, repeat, switchMap, takeUntil} from 'rxjs/operators';

// @dynamic
@Injectable()
export class TuiZoomService extends Observable<TuiZoom> {
    constructor(@Inject(ElementRef) {nativeElement}: ElementRef<HTMLElement>) {
        super(subscriber => {
            let distance = 0;

            typedFromEvent(nativeElement, 'touchstart', {passive: true})
                .pipe(
                    filter(event => event.touches.length > 1),
                    map(event => distanceBetweenTouches(event)),
                    switchMap(startDistance => {
                        distance = startDistance;

                        return typedFromEvent(nativeElement, 'touchmove', {
                            passive: true,
                        });
                    }),
                    takeUntil(typedFromEvent(nativeElement, 'touchend')),
                    repeat(),
                    map(event => {
                        const clientX =
                            (event.touches[0].clientX + event.touches[1].clientX) / 2;
                        const clientY =
                            (event.touches[0].clientY + event.touches[1].clientY) / 2;

                        const newDistanse = distanceBetweenTouches(event);
                        const delta = (distance - newDistanse) * 0.01;

                        distance = newDistanse;

                        return {clientX, clientY, delta, event};
                    }),
                    merge(
                        typedFromEvent(nativeElement, 'wheel', {passive: false}).pipe(
                            map(wheel => ({
                                clientX: wheel.clientX,
                                clientY: wheel.clientY,
                                delta: wheel.deltaY * 0.01,
                                event: wheel,
                            })),
                        ),
                    ),
                )
                .subscribe(subscriber);
        });
    }
}
