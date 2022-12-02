import {DOCUMENT} from '@angular/common';
import {ElementRef, Inject, Injectable, Self} from '@angular/core';
import {tuiGetElementPoint} from '@taiga-ui/addon-editor/utils';
import {TuiDestroyService, tuiPreventDefault, tuiTypedFromEvent} from '@taiga-ui/cdk';
import {TuiPoint} from '@taiga-ui/core';
import {Observable} from 'rxjs';
import {map, startWith, switchMap, takeUntil} from 'rxjs/operators';

@Injectable()
export class TuiPickerService extends Observable<TuiPoint> {
    constructor(
        @Self() @Inject(TuiDestroyService) destroy$: Observable<void>,
        @Inject(ElementRef) {nativeElement}: ElementRef<HTMLElement>,
        @Inject(DOCUMENT) documentRef: Document,
    ) {
        const point$ = tuiTypedFromEvent(nativeElement, `mousedown`).pipe(
            tuiPreventDefault(),
            switchMap(event => {
                const mouseMove$ = tuiTypedFromEvent(documentRef, `mousemove`).pipe(
                    map(({clientX, clientY}) =>
                        tuiGetElementPoint(clientX, clientY, nativeElement),
                    ),
                    takeUntil(tuiTypedFromEvent(documentRef, `mouseup`)),
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
            takeUntil(destroy$),
        );

        super(subscriber => point$.subscribe(subscriber));
    }
}
