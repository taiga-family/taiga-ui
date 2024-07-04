import {DOCUMENT} from '@angular/common';
import {inject, Injectable} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {tuiPreventDefault, tuiTypedFromEvent} from '@taiga-ui/cdk/observables';
import {tuiGetElementPoint, tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import type {TuiPoint} from '@taiga-ui/core/types';
import {map, Observable, startWith, switchMap, takeUntil} from 'rxjs';

/**
 * @deprecated: drop in v5.0
 */
@Injectable()
export class TuiPickerService extends Observable<TuiPoint> {
    constructor() {
        const nativeElement = tuiInjectElement();
        const doc = inject(DOCUMENT);

        const point$ = tuiTypedFromEvent(nativeElement, 'mousedown').pipe(
            tuiPreventDefault(),
            switchMap((event) => {
                const mouseMove$ = tuiTypedFromEvent(doc, 'mousemove').pipe(
                    map(({clientX, clientY}) =>
                        tuiGetElementPoint(clientX, clientY, nativeElement),
                    ),
                    takeUntil(tuiTypedFromEvent(doc, 'mouseup')),
                );

                return event.target === nativeElement
                    ? mouseMove$.pipe(
                          startWith(
                              tuiGetElementPoint(
                                  event.clientX,
                                  event.clientY,
                                  nativeElement,
                              ),
                          ),
                      )
                    : mouseMove$;
            }),
            takeUntilDestroyed(),
        );

        super((subscriber) => point$.subscribe(subscriber));
    }
}
