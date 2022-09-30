import {DOCUMENT} from '@angular/common';
import {Directive, ElementRef, EventEmitter, Inject, Output} from '@angular/core';
import {tuiClamp, TuiDestroyService, tuiRound, tuiTypedFromEvent} from '@taiga-ui/cdk';
import {TUI_FLOATING_PRECISION} from '@taiga-ui/kit/constants';
import {merge, Observable} from 'rxjs';
import {filter, map, repeat, startWith, switchMap, takeUntil, tap} from 'rxjs/operators';

import {TuiRangeComponent} from './range.component';

@Directive({
    selector: `tui-range`,
    providers: [TuiDestroyService],
})
export class TuiRangeChangeDirective {
    /**
     * TODO replace with pointer events (when all supported browsers can handle them).
     * Dont forget to use setPointerCapture instead of listening all documentRef events
     */
    private readonly pointerDown$ = merge(
        tuiTypedFromEvent(this.elementRef.nativeElement, `touchstart`, {
            passive: true,
        }).pipe(
            filter(({touches}) => touches.length === 1),
            map(({touches}) => touches[0]),
        ),
        tuiTypedFromEvent(this.elementRef.nativeElement, `mousedown`, {passive: true}),
    );

    private readonly pointerMove$ = merge(
        tuiTypedFromEvent(this.documentRef, `touchmove`).pipe(
            filter(({touches}) => touches.length === 1),
            map(({touches}) => touches[0]),
        ),
        tuiTypedFromEvent(this.documentRef, `mousemove`),
    );

    private readonly pointerUp$ = merge(
        tuiTypedFromEvent(this.documentRef, `touchend`, {passive: true}),
        tuiTypedFromEvent(this.documentRef, `mouseup`, {passive: true}),
    );

    @Output()
    activeThumbChange = new EventEmitter<'left' | 'right'>();

    constructor(
        @Inject(DOCUMENT) private readonly documentRef: Document,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(TuiRangeComponent) private readonly range: TuiRangeComponent,
        @Inject(TuiDestroyService) destroy$: Observable<unknown>,
    ) {
        let activeThumb: 'left' | 'right';

        this.pointerDown$
            .pipe(
                tap(({clientX, target}) => {
                    activeThumb = this.detectActiveThumb(clientX, target);
                    this.activeThumbChange.emit(activeThumb);

                    if (this.range.focusable) {
                        elementRef.nativeElement.focus();
                    }
                }),
                switchMap(event => this.pointerMove$.pipe(startWith(event))),
                map(({clientX}) => this.getFractionFromEvents(clientX)),
                takeUntil(this.pointerUp$),
                repeat(),
                takeUntil(destroy$),
            )
            .subscribe(fraction => {
                const value = this.range.getValueFromFraction(fraction);

                this.range.processValue(value, activeThumb === `right`);
            });
    }

    private getFractionFromEvents(clickClientX: number): number {
        const hostRect = this.elementRef.nativeElement.getBoundingClientRect();
        const value = clickClientX - hostRect.left;
        const total = hostRect.width;

        return tuiClamp(tuiRound(value / total, TUI_FLOATING_PRECISION), 0, 1);
    }

    private detectActiveThumb(
        clientX: number,
        target: EventTarget | null,
    ): 'left' | 'right' {
        const [leftSliderRef, rightSliderRef] = this.range.slidersRefs;

        switch (target) {
            case leftSliderRef.nativeElement:
                return `left`;
            case rightSliderRef.nativeElement:
                return `right`;
            default:
                return this.findNearestActiveThumb(clientX);
        }
    }

    private findNearestActiveThumb(clientX: number): 'left' | 'right' {
        const fraction = this.getFractionFromEvents(clientX);
        const deltaLeft = fraction * 100 - this.range.left;
        const deltaRight = fraction * 100 - 100 + this.range.right;

        return Math.abs(deltaLeft) > Math.abs(deltaRight) ||
            deltaRight > 0 ||
            (this.range.left === 0 && this.range.right === 100)
            ? `right`
            : `left`;
    }
}
