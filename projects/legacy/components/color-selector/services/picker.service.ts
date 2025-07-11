import {DOCUMENT} from '@angular/common';
import {inject, Injectable} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {tuiPreventDefault, tuiTypedFromEvent} from '@taiga-ui/cdk/observables';
import {tuiGetElementPoint, tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import type {TuiPoint} from '@taiga-ui/core/types';
import {map, Observable, startWith, switchMap, takeUntil} from 'rxjs';

/**
 * TODO(v5): delete it
 * @deprecated use new version of {@link https://taiga-ui.dev/components/input-color TuiInputColor} (from @taiga-ui/kit) instead
 */
@Injectable()
export class TuiPickerService extends Observable<TuiPoint> {
    private readonly el = tuiInjectElement();
    private readonly doc = inject(DOCUMENT);
    private readonly point$ = tuiTypedFromEvent(this.el, 'mousedown').pipe(
        tuiPreventDefault(),
        switchMap((event) => {
            const mouseMove$ = tuiTypedFromEvent(this.doc, 'mousemove').pipe(
                map(({clientX, clientY}) =>
                    tuiGetElementPoint(clientX, clientY, this.el),
                ),
                takeUntil(tuiTypedFromEvent(this.doc, 'mouseup')),
            );

            return event.target === this.el
                ? mouseMove$.pipe(
                      startWith(
                          tuiGetElementPoint(event.clientX, event.clientY, this.el),
                      ),
                  )
                : mouseMove$;
        }),
        takeUntilDestroyed(),
    );

    constructor() {
        super((subscriber) => this.point$.subscribe(subscriber));
    }
}
