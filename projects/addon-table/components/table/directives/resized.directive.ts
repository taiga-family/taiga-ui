import {DOCUMENT} from '@angular/common';
import {Directive, inject, Output} from '@angular/core';
import {EMPTY_CLIENT_RECT} from '@taiga-ui/cdk/constants';
import {tuiPreventDefault, tuiTypedFromEvent} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {distinctUntilChanged, map, switchMap, takeUntil} from 'rxjs';

@Directive({
    standalone: true,
    selector: '[tuiResized]',
})
export class TuiTableResized {
    private readonly doc = inject(DOCUMENT);
    private readonly el = tuiInjectElement();

    @Output()
    public readonly tuiResized = tuiTypedFromEvent(this.el, 'mousedown').pipe(
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
}
