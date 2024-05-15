import {DOCUMENT} from '@angular/common';
import {Directive, inject, Output} from '@angular/core';
import {tuiInjectElement, tuiPreventDefault, tuiTypedFromEvent} from '@taiga-ui/cdk';
import {TUI_ELEMENT_REF} from '@taiga-ui/core';
import {distinctUntilChanged, map, switchMap, takeUntil} from 'rxjs';

@Directive({
    standalone: true,
    selector: '[tuiResized]',
})
export class TuiResizedDirective {
    private readonly doc = inject(DOCUMENT);
    private readonly el = tuiInjectElement();
    private readonly parentRef: HTMLTableCellElement =
        inject(TUI_ELEMENT_REF).nativeElement;

    @Output()
    public readonly tuiResized = tuiTypedFromEvent(this.el, 'mousedown').pipe(
        tuiPreventDefault(),
        switchMap(() => {
            const {width, right} = this.parentRef.getBoundingClientRect();

            return tuiTypedFromEvent(this.doc, 'mousemove').pipe(
                distinctUntilChanged(),
                map(({clientX}) => width + clientX - right),
                takeUntil(tuiTypedFromEvent(this.doc, 'mouseup')),
            );
        }),
    );
}
