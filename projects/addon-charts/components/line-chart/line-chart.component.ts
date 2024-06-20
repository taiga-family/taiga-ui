import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import type {QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    HostListener,
    inject,
    Input,
    NgZone,
    ViewChildren,
} from '@angular/core';
import type {TuiLineChartHintContext} from '@taiga-ui/addon-charts/types';
import {tuiDraw} from '@taiga-ui/addon-charts/utils';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {TuiLet} from '@taiga-ui/cdk/directives/let';
import {tuiZoneOptimized} from '@taiga-ui/cdk/observables';
import {TuiIdService} from '@taiga-ui/cdk/services';
import type {TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiIsPresent, tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    TuiHint,
    TuiHintHover,
    TuiHintOptionsDirective,
    tuiHintOptionsProvider,
} from '@taiga-ui/core/directives/hint';
import type {TuiPoint} from '@taiga-ui/core/types';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import type {Observable} from 'rxjs';
import {distinctUntilChanged, Subject} from 'rxjs';

import {TUI_LINE_CHART_OPTIONS} from './line-chart.options';
import {TuiLineChartHintDirective} from './line-chart-hint.directive';

@Component({
    standalone: true,
    selector: 'tui-line-chart',
    imports: [TuiLet, AsyncPipe, NgIf, TuiHint, NgForOf],
    templateUrl: './line-chart.template.html',
    styleUrls: ['./line-chart.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    viewProviders: [tuiHintOptionsProvider({direction: 'top', hideDelay: 0})],
})
export class TuiLineChart {
    private readonly zone = inject(NgZone);
    private readonly options = inject(TUI_LINE_CHART_OPTIONS);
    private readonly hover$ = new Subject<number>();
    private readonly autoIdString = inject(TuiIdService).generate();

    protected readonly hintDirective = inject(TuiLineChartHintDirective, {
        optional: true,
    });

    protected readonly hintOptions = inject(TuiHintOptionsDirective, {optional: true});

    @ViewChildren(TuiHintHover)
    public readonly drivers: QueryList<Observable<boolean>> = EMPTY_QUERY;

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

    public value: readonly TuiPoint[] = [];

    @Input('value')
    public set valueSetter(value: readonly TuiPoint[]) {
        this.value = value.filter(item => !item.some(Number.isNaN));
    }

    public onHovered(index: number): void {
        this.hover$.next(index);
    }

    @tuiPure
    protected get hovered$(): Observable<number> {
        return this.hover$.pipe(distinctUntilChanged(), tuiZoneOptimized(this.zone));
    }

    protected get hintContent(): PolymorpheusContent<TuiLineChartHintContext<TuiPoint>> {
        return this.hintOptions?.content || '';
    }

    protected get fillId(): string {
        return `tui-line-chart-${this.autoIdString}`;
    }

    protected get fill(): string {
        return this.filled ? `url(#${this.fillId})` : 'none';
    }

    protected get viewBox(): string {
        return `${this.x} ${this.y} ${this.width} ${this.height}`;
    }

    protected get d(): string {
        return this.getD(this.value, this.smoothingFactor);
    }

    protected get fillD(): string {
        return this.value.length
            ? `${this.d}V ${this.y} H ${this.value[0][0]} V ${this.value[0][1]}`
            : this.d;
    }

    protected get isFocusable(): boolean {
        return !this.hintDirective && this.hasHints;
    }

    protected get hasHints(): boolean {
        return (
            !!this.xStringify ||
            !!this.yStringify ||
            !!this.hintDirective?.hint ||
            !!this.hintContent
        );
    }

    @HostListener('mouseleave')
    protected onMouseLeave(): void {
        if (!this.hintDirective) {
            this.onHovered(NaN);
        }
    }

    protected getX(index: number): number {
        if (this.isSinglePoint) {
            return this.value[0][0] / 2;
        }

        return index
            ? (this.value[index - 1][0] + this.value[index][0]) / 2
            : 2 * this.value[0][0] - this.getX(1);
    }

    protected getWidth(index: number): number {
        return (100 * this.computeWidth(index)) / this.width;
    }

    protected getHintId(index: number): string {
        return `${this.autoIdString}_${index}`;
    }

    protected getImplicit($implicit: TuiPoint): TuiPoint | readonly TuiPoint[] {
        return (
            this.hintDirective?.getContext(this.value.indexOf($implicit), this) ||
            $implicit
        );
    }

    protected getHovered(hovered: number | null): TuiPoint | null {
        // This checks for NaN and null too since async pipe returns null before first item
        return tuiIsPresent(hovered) && Number.isInteger(hovered)
            ? this.value[hovered]
            : null;
    }

    protected getBottom(y: number): number {
        return (100 * (y - this.y)) / this.height;
    }

    protected getLeft(x: number): number {
        return (100 * (x - this.x)) / this.width;
    }

    protected getOffset(x: number): number {
        return (100 * (this.value[x][0] - this.getX(x))) / this.computeWidth(x);
    }

    protected onMouseEnter(index: number): void {
        if (this.hintDirective) {
            this.hintDirective.raise(index, this);
        } else {
            this.onHovered(index);
        }
    }

    private get isSinglePoint(): boolean {
        return this.value.length === 1;
    }

    @tuiPure
    private getD(value: readonly TuiPoint[], smoothingFactor: number): string {
        return value.reduce(
            (d, point, index) =>
                index ? `${d} ${tuiDraw(value, index, smoothingFactor)}` : `M ${point}`,
            '',
        );
    }

    private computeWidth(index: number): number {
        return index === this.value.length - 1
            ? 2 * (this.value[index][0] - this.getX(index))
            : this.getX(index + 1) - this.getX(index);
    }
}
