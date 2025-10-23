import {DOCUMENT} from '@angular/common';
import {Directive, inject} from '@angular/core';
import {outputFromObservable} from '@angular/core/rxjs-interop';
import {EMPTY_CLIENT_RECT} from '@taiga-ui/cdk/constants';
import {tuiPreventDefault, tuiTypedFromEvent} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {distinctUntilChanged, map, switchMap, takeUntil} from 'rxjs';

@Directive({
    selector: '[tuiResized]',
})
export class TuiTableResized {
    private readonly doc = inject(DOCUMENT);
    private readonly el = tuiInjectElement();

    private readonly tuiResized$ = tuiTypedFromEvent(this.el, 'mousedown').pipe(
        tuiPreventDefault(),
        switchMap(() => {
            const {width, right} =
                this.el.closest('th')?.getBoundingClientRect() || EMPTY_CLIENT_RECT;

            return tuiTypedFromEvent(this.doc, 'mousemove').pipe(
                distinctUntilChanged(),
                map(({clientX}) => width + clientX - right),
                takeUntil(tuiTypedFromEvent(this.doc, 'mouseup')),
            );
        }),
    );

    public readonly tuiResized = outputFromObservable(this.tuiResized$);
}
