import {DOCUMENT} from '@angular/common';
import {Directive, EventEmitter, inject, Output} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {tuiTypedFromEvent} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiClamp, tuiRound} from '@taiga-ui/cdk/utils/math';
import {TUI_FLOATING_PRECISION} from '@taiga-ui/kit/components/slider';
import {map, repeat, startWith, switchMap, takeUntil, tap} from 'rxjs';

import {TuiRange} from './range.component';

@Directive({
    standalone: true,
})
export class TuiRangeChange {
    private readonly doc = inject(DOCUMENT);
    private readonly el = tuiInjectElement();
    private readonly range = inject(TuiRange);

    @Output()
    public readonly activeThumbChange = new EventEmitter<'left' | 'right'>();

    constructor() {
        let activeThumb: 'left' | 'right';

        tuiTypedFromEvent(this.el, 'pointerdown', {
            passive: true,
            capture: true,
        })
            .pipe(
                tap(({clientX, target, pointerId}) => {
                    activeThumb = this.detectActiveThumb(clientX, target);
                    this.range.slidersRefs
                        .get(activeThumb === 'left' ? 0 : 1)
                        ?.nativeElement.setPointerCapture(pointerId);
                    this.activeThumbChange.emit(activeThumb);

                    if (this.range.focusable) {
                        this.el.focus();
                    }
                }),
                switchMap((event) =>
                    tuiTypedFromEvent(this.doc, 'pointermove').pipe(startWith(event)),
                ),
                map(({clientX}) => this.getFractionFromEvents(clientX ?? 0)),
                takeUntil(tuiTypedFromEvent(this.doc, 'pointerup', {passive: true})),
                repeat(),
                takeUntilDestroyed(),
            )
            .subscribe((fraction) => {
                const value = this.range.toValue(fraction);

                this.range.processValue(value, activeThumb === 'right');
            });
    }

    private getFractionFromEvents(clickClientX: number): number {
        const hostRect = this.el.getBoundingClientRect();
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
            case leftSliderRef?.nativeElement:
                return 'left';
            case rightSliderRef?.nativeElement:
                return 'right';
            default:
                return this.findNearestActiveThumb(clientX);
        }
    }

    private findNearestActiveThumb(clientX: number): 'left' | 'right' {
        const fraction = this.getFractionFromEvents(clientX);
        const deltaLeft = fraction * 100 - this.range.left();
        const deltaRight = fraction * 100 - 100 + this.range.right();

        return Math.abs(deltaLeft) > Math.abs(deltaRight) ||
            deltaRight > 0 ||
            (this.range.left() === 0 && this.range.right() === 100)
            ? 'right'
            : 'left';
    }
}
