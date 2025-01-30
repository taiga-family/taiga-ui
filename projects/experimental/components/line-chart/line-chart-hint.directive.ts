import {computed, Directive, effect, inject, signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {tuiInjectElement, tuiIsElement} from '@taiga-ui/cdk/utils/dom';
import {tuiDirectiveBinding, tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    TuiHintDirective,
    TuiHintHost,
    TuiHintHover,
    tuiHintOptionsProvider,
} from '@taiga-ui/core/directives/hint';
import {from} from 'rxjs';

import type {TuiLineChartPoint} from './line-chart.component';
import {TuiLineChart} from './line-chart.component';

@Directive({
    standalone: true,
    selector: '[tuiLineChartHint]',
    providers: [tuiHintOptionsProvider({hideDelay: 0, direction: 'top'})],
    hostDirectives: [
        TuiHintHost,
        {
            directive: TuiHintDirective,
            inputs: ['tuiHint: tuiLineChartHint', 'tuiHintAppearance'],
        },
    ],
    host: {
        '[class._hovered]': 'hovered()',
        '(mouseleave)': 'onMouseLeave($event)',
        '(mouseenter)': 'onMouseEnter()',
        '(mousemove)': 'onMouseMove($event)',
    },
})
export class TuiLineChartHint {
    private readonly el = tuiInjectElement();
    private readonly hintHover = toSignal(
        from(inject(TuiHintHover, {optional: true}) || [false]),
    );

    private readonly chart = inject(TuiLineChart);
    private readonly mouseX = signal(0);

    protected readonly hovered = signal(true);
    protected hoveredEffect = effect(
        () => {
            if (!this.hintHover()) {
                this.hovered.set(false);
            }
        },
        {allowSignalWrites: true},
    );

    protected closestPointEffect = effect(
        () => {
            this.chart.currentPoints.set(this.findClosestPoints(this.mouseX()));
        },
        {allowSignalWrites: true},
    );

    protected readonly contextBinding = tuiDirectiveBinding(
        TuiHintDirective,
        'tuiHintContext',
        computed(() => ({$implicit: this.chart.currentPoints().map((p) => p?.value)})),
    );

    protected readonly hostBinding = tuiDirectiveBinding(
        TuiHintHost,
        'tuiHintHost',
        computed(() => {
            const maxIndex = this.chart
                .currentPoints()
                .reduce(
                    (maxIdx, item, idx, array) =>
                        item.bottom > array[maxIdx]!.bottom ? idx : maxIdx,
                    0,
                );

            return this.chart.hintHosts.get(maxIndex)?.nativeElement;
        }),
    );

    protected onMouseLeave({relatedTarget}: MouseEvent): void {
        if (tuiIsElement(relatedTarget) && !relatedTarget?.closest('tui-hint')) {
            this.hovered.set(false);
        }
    }

    protected onMouseEnter(): void {
        this.hovered.set(true);
    }

    protected onMouseMove(event: MouseEvent): void {
        this.mouseX.set(
            ((event.clientX - this.el.getBoundingClientRect().left) /
                this.el.getBoundingClientRect().width) *
                100,
        );
    }

    protected findClosestPoints(left: number): TuiLineChartPoint[] {
        const closestIndex =
            this.chart
                .points()[0]
                ?.reduce(
                    (closestIdx, point, index, arr) =>
                        Math.abs(point.left - left) <
                        Math.abs((arr[closestIdx]?.left ?? 0) - left)
                            ? index
                            : closestIdx,
                    0,
                ) ?? 0;

        return this.chart
            .points()
            .map((value) => value[closestIndex])
            .filter(tuiIsPresent);
    }
}
