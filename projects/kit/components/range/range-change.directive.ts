import {DOCUMENT} from '@angular/common';
import {Directive, inject, output} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {tuiTypedFromEvent} from '@taiga-ui/cdk/observables';
import {tuiInjectElement, tuiIsElement, tuiIsInput} from '@taiga-ui/cdk/utils/dom';
import {tuiClamp, tuiRound} from '@taiga-ui/cdk/utils/math';
import {TUI_FLOATING_PRECISION} from '@taiga-ui/core/components/slider';
import {identity, map, repeat, startWith, switchMap, takeUntil, tap} from 'rxjs';

import {TuiRange} from './range.component';

@Directive()
export class TuiRangeChange {
    private readonly doc = inject(DOCUMENT);
    private readonly el = tuiInjectElement();
    private readonly range = inject(TuiRange);

    public readonly activeThumbChange = output<'end' | 'start'>();

    constructor() {
        let activeThumb: 'end' | 'start';

        tuiTypedFromEvent(this.el, 'pointerdown', {
            passive: true,
            capture: true,
        })
            .pipe(
                tap(({clientX, target, pointerId}) => {
                    activeThumb = this.detectActiveThumb(clientX, target);
                    const slideElement =
                        this.range.thumbs()[activeThumb === 'start' ? 0 : 1];

                    slideElement.setPointerCapture(pointerId);
                    this.activeThumbChange.emit(activeThumb);

                    if (this.range.focusable()) {
                        this.el.focus();
                    }
                }),
                switchMap((event) =>
                    tuiTypedFromEvent(this.doc, 'pointermove').pipe(
                        tuiIsElement(event.target) && tuiIsInput(event.target)
                            ? identity
                            : startWith(event),
                    ),
                ),
                map(({clientX}) => this.getFractionFromEvents(clientX ?? 0)),
                takeUntil(tuiTypedFromEvent(this.doc, 'pointerup', {passive: true})),
                repeat(),
                takeUntilDestroyed(),
            )
            .subscribe((fraction) => {
                const value = this.range.toValue(fraction);

                this.range.processValue(value, activeThumb === 'end');
            });
    }

    private getFractionFromEvents(clickClientX: number): number {
        const {left, right, width} = this.el.getBoundingClientRect();
        const start = this.el.matches('[dir="rtl"] :scope') ? right : left;
        const value = Math.abs(tuiClamp(clickClientX, left, right) - start);

        return tuiRound(value / width, TUI_FLOATING_PRECISION);
    }

    private detectActiveThumb(
        clientX: number,
        target: EventTarget | null,
    ): 'end' | 'start' {
        const [startThumb, endThumb] = this.range.thumbs();

        switch (target) {
            case endThumb:
                return 'end';
            case startThumb:
                return 'start';
            default:
                return this.findNearestActiveThumb(clientX);
        }
    }

    private findNearestActiveThumb(clientX: number): 'end' | 'start' {
        const fraction = this.getFractionFromEvents(clientX);
        const deltaStart = fraction * 100 - this.range.start();
        const deltaEnd = fraction * 100 - 100 + this.range.end();

        return Math.abs(deltaStart) > Math.abs(deltaEnd) ||
            deltaEnd > 0 ||
            (this.range.start() === 0 && this.range.end() === 100)
            ? 'end'
            : 'start';
    }
}
