import {DOCUMENT} from '@angular/common';
import {ElementRef, Inject, Injectable} from '@angular/core';
import {getElementPoint} from '@taiga-ui/addon-editor/utils';
import {preventDefault, TuiDestroyService, typedFromEvent} from '@taiga-ui/cdk';
import {TuiPoint} from '@taiga-ui/core';
import {Observable} from 'rxjs';
import {map, startWith, switchMap, takeUntil} from 'rxjs/operators';

// @dynamic
@Injectable()
export class TuiPickerService extends Observable<TuiPoint> {
    constructor(
        @Inject(TuiDestroyService) destroy$: Observable<void>,
        @Inject(ElementRef) {nativeElement}: ElementRef<HTMLElement>,
        @Inject(DOCUMENT) documentRef: Document,
    ) {
        const point$ = typedFromEvent(nativeElement, `mousedown`).pipe(
            preventDefault(),
            switchMap(event => {
                const mouseMove$ = typedFromEvent(documentRef, `mousemove`).pipe(
                    map(({clientX, clientY}) =>
                        getElementPoint(clientX, clientY, nativeElement),
                    ),
                    takeUntil(typedFromEvent(documentRef, `mouseup`)),
                );

                return event.target === nativeElement
                    ? mouseMove$.pipe(
                          startWith(
                              getElementPoint(
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
