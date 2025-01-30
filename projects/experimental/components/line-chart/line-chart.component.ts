import {NgForOf, NgIf} from '@angular/common';
import type {ElementRef, QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    Input,
    signal,
    ViewChildren,
} from '@angular/core';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import type {TuiStringHandler} from '@taiga-ui/cdk/types';
import {TuiHintDirective} from '@taiga-ui/core/directives/hint';
import type {TuiPoint} from '@taiga-ui/core/types';

import {TuiLine} from './line.component';
import {TUI_LINE_CHART_OPTIONS} from './line-chart.options';

export interface TuiLineChartPoint {
    readonly left: number;
    readonly bottom: number;
    readonly value: TuiPoint;
}

@Component({
    standalone: true,
    selector: 'tui-line-chart',
    imports: [NgForOf, NgIf, TuiLine],
    templateUrl: './line-chart.template.html',
    styleUrls: ['./line-chart.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiLineChart {
    private readonly options = inject(TUI_LINE_CHART_OPTIONS);
    protected readonly hint = inject(TuiHintDirective, {optional: true});
    protected readonly values = signal<readonly TuiPoint[][]>([]);

    @ViewChildren('hintHost')
    public readonly hintHosts: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    @Input()
    public x = 0;

    @Input()
    public y = 0;

    @Input()
    public width = 0;

    @Input()
    public height = 0;

    @Input()
    public smoothingFactor = this.options.smoothingFactor;

    @Input()
    public xStringify: TuiStringHandler<number> | null = null;

    @Input()
    public yStringify: TuiStringHandler<number> | null = null;

    @Input()
    public filled = this.options.filled;

    @Input()
    public dots = this.options.dots;

    public readonly currentPoints = signal<TuiLineChartPoint[]>([]);

    public readonly points = computed(() =>
        this.values().map((v) =>
            v.map((value) => ({
                left: this.getLeft(value[0]),
                bottom: this.getBottom(value[1]),
                value,
            })),
        ),
    );

    @Input('value')
    public set valueSetter(values: readonly TuiPoint[][]) {
        this.values.set(
            values.map((value) => value.filter((item) => !item.some(Number.isNaN))),
        );
    }

    protected get isFocusable(): boolean {
        return this.hasHints;
    }

    protected get hasHints(): boolean {
        return !!this.xStringify || !!this.yStringify || !!this.hint?.content();
    }

    protected trackByIndex(index: number): number {
        return index;
    }

    private getBottom(y: number): number {
        return (100 * (y - this.y)) / this.height;
    }

    private getLeft(x: number): number {
        return (100 * (x - this.x)) / this.width;
    }
}
