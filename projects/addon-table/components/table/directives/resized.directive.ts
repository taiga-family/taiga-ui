import {DOCUMENT} from '@angular/common';
import {Directive, ElementRef, Inject, Output} from '@angular/core';
import {tuiPreventDefault, tuiTypedFromEvent} from '@taiga-ui/cdk';
import {TUI_ELEMENT_REF} from '@taiga-ui/core';
import {distinctUntilChanged, map, switchMap, takeUntil} from 'rxjs/operators';

@Directive({
    selector: '[tuiResized]',
})
export class TuiResizedDirective {
    @Output()
    readonly tuiResized = tuiTypedFromEvent(this.el.nativeElement, 'mousedown').pipe(
        tuiPreventDefault(),
        switchMap(() => {
            const {width, right} = this.parentRef.nativeElement.getBoundingClientRect();

            return tuiTypedFromEvent(this.doc, 'mousemove').pipe(
                distinctUntilChanged(),
                map(({clientX}) => width + clientX - right),
                takeUntil(tuiTypedFromEvent(this.doc, 'mouseup')),
            );
        }),
    );

    constructor(
        @Inject(DOCUMENT) private readonly doc: Document,
        @Inject(ElementRef)
        private readonly el: ElementRef<HTMLElement>,
        @Inject(TUI_ELEMENT_REF)
        private readonly parentRef: ElementRef<HTMLTableHeaderCellElement>,
    ) {}
}
