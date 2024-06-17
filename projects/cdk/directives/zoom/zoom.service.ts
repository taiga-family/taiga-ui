import {inject, Injectable} from '@angular/core';
import {tuiPreventDefault, tuiTypedFromEvent} from '@taiga-ui/cdk/observables';
import {tuiDistanceBetweenTouches, tuiInjectElement} from '@taiga-ui/cdk/utils';
import {filter, map, merge, Observable, scan, switchMap, takeUntil} from 'rxjs';

import {TUI_ZOOM_OPTIONS} from './zoom.options';
import type {TuiZoomEvent} from './zoom.types';

const TOUCH_SENSITIVITY = 0.01;

@Injectable()
export class TuiZoomService extends Observable<TuiZoomEvent> {
    constructor() {
        const el = tuiInjectElement();
        const {wheelSensitivity} = inject(TUI_ZOOM_OPTIONS);

        super(subscriber => {
            merge(
                tuiTypedFromEvent(el, 'touchstart', {passive: true}).pipe(
                    filter(({touches}) => touches.length > 1),
                    switchMap(startEvent =>
                        tuiTypedFromEvent(el, 'touchmove', {passive: true}).pipe(
                            tuiPreventDefault(),
                            scan(
                                (prev, event) => {
                                    const distance = tuiDistanceBetweenTouches(event);

                                    return {
                                        event,
                                        distance,
                                        delta:
                                            (distance - prev.distance) *
                                            TOUCH_SENSITIVITY,
                                    };
                                },
                                {
                                    event: startEvent,
                                    distance: tuiDistanceBetweenTouches(startEvent),
                                    delta: 0,
                                },
                            ),
                            map(({event, delta}) => {
                                const clientX =
                                    (event.touches[0].clientX +
                                        event.touches[1].clientX) /
                                    2;
                                const clientY =
                                    (event.touches[0].clientY +
                                        event.touches[1].clientY) /
                                    2;

                                return {clientX, clientY, delta, event};
                            }),
                            takeUntil(tuiTypedFromEvent(el, 'touchend')),
                        ),
                    ),
                ),
                tuiTypedFromEvent(el, 'wheel', {passive: false}).pipe(
                    tuiPreventDefault(),
                    map(wheel => ({
                        clientX: wheel.clientX,
                        clientY: wheel.clientY,
                        delta: -wheel.deltaY * wheelSensitivity,
                        event: wheel,
                    })),
                ),
            ).subscribe(subscriber);
        });
    }
}
