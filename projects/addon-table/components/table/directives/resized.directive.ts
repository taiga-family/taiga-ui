import {DOCUMENT} from '@angular/common';
import {Directive, inject, Output} from '@angular/core';
import {
    EMPTY_CLIENT_RECT,
    tuiInjectElement,
    tuiPreventDefault,
    tuiTypedFromEvent,
} from '@taiga-ui/cdk';
import {distinctUntilChanged, map, switchMap, takeUntil} from 'rxjs';

@Directive({
    selector: '[tuiResized]',
})
export class TuiResizedDirective {
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
