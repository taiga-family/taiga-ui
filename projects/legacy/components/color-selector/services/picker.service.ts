import {DOCUMENT} from '@angular/common';
import {inject, Injectable} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {tuiPreventDefault, tuiTypedFromEvent} from '@taiga-ui/cdk/observables';
import {tuiGetElementPoint, tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import type {TuiPoint} from '@taiga-ui/core/types';
import {map, Observable, startWith, switchMap, takeUntil} from 'rxjs';

@Injectable()
export class TuiPickerService extends Observable<TuiPoint> {
    private readonly el = tuiInjectElement();
    private readonly doc = inject(DOCUMENT);
    private readonly point$ = tuiTypedFromEvent(this.el, 'pointerdown').pipe(
        tuiPreventDefault(),
        switchMap((event) => {
            const pointerMove$ = tuiTypedFromEvent(this.doc, 'pointermove').pipe(
                map(({clientX, clientY}) =>
                    tuiGetElementPoint(clientX, clientY, this.el),
                ),
                takeUntil(tuiTypedFromEvent(this.doc, 'pointerup')),
            );

            return event.target === this.el
                ? pointerMove$.pipe(
                      startWith(
                          tuiGetElementPoint(event.clientX, event.clientY, this.el),
                      ),
                  )
                : pointerMove$;
        }),
        takeUntilDestroyed(),
    );

    constructor() {
        super((subscriber) => this.point$.subscribe(subscriber));
    }
}
