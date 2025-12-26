import {AsyncPipe} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    input,
    signal,
    viewChildren,
} from '@angular/core';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {WaResizeObserverService} from '@ng-web-apis/resize-observer';
import {TuiChartHint} from '@taiga-ui/addon-charts/components/chart-hint';
import {type TuiLineChartHintContext} from '@taiga-ui/addon-charts/types';
import {tuiDraw} from '@taiga-ui/addon-charts/utils';
import {type TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiGenerateId, tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiHint, TuiHintHover, tuiHintOptionsProvider} from '@taiga-ui/core/portals/hint';
import {type TuiPoint} from '@taiga-ui/core/types';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {filter, map} from 'rxjs';

import {TUI_LINE_CHART_OPTIONS} from './line-chart.options';
import {TuiLineChartHint} from './line-chart-hint.directive';

@Component({
    selector: 'tui-line-chart',
    imports: [AsyncPipe, TuiHint],
    templateUrl: './line-chart.template.html',
    styleUrl: './line-chart.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [WaResizeObserverService],
    viewProviders: [tuiHintOptionsProvider({direction: 'top', hideDelay: 0})],
    host: {
        '(mouseleave)': 'onMouseLeave()',
    },
})
export class TuiLineChart {
    private readonly options = inject(TUI_LINE_CHART_OPTIONS);
    private readonly autoId = tuiGenerateId();
    private readonly resize = toSignal(
        inject(WaResizeObserverService, {self: true}).pipe(
            map(([e]) => e?.contentRect.height || NaN),
            filter((height) => !Number.isNaN(height)),
        ),
        {initialValue: NaN},
    );

    private readonly box = computed(
        () => `${this.x()} ${this.y()} ${this.width()} ${this.height()}`,
    );

    protected readonly hintDirective = inject(TuiLineChartHint, {optional: true});
    protected readonly hintOptions = inject(TuiChartHint, {optional: true});
    protected readonly viewBox = computed(() => {
        if (Number.isNaN(this.resize())) {
            return '0 0 0 0';
        }

        const offset = this.height() / Math.max(this.resize(), 1);
        const [x = 0, y = 0, width = 0, height = 0] = this.box().split(' ').map(Number);

        return `${x} ${y - offset} ${width} ${height + 2 * offset}`;
    });

    protected readonly d = computed(() =>
        this.value().reduce(
            (d, point, index) =>
                index
                    ? `${d} ${tuiDraw(this.value(), index, this.smoothingFactor())}`
                    : `M ${point}`,
            '',
        ),
    );

    protected readonly fillD = computed(() =>
        this.value().length
            ? `${this.d()}V ${this.y()} H ${this.value()[0]?.[0]} V ${this.value()[0]?.[1]}`
            : this.d(),
    );

    public readonly drivers = viewChildren(TuiHintHover);
    public readonly drivers$ = toObservable(this.drivers);

    public readonly x = input(0);
    public readonly y = input(0);
    public readonly width = input(0);
    public readonly height = input(0);
    public readonly smoothingFactor = input(this.options.smoothingFactor);

    public xStringify = input<TuiStringHandler<number> | null>(null);
    public yStringify = input<TuiStringHandler<number> | null>(null);

    public readonly filled = input(this.options.filled);
    public readonly dots = input(this.options.dots);

    public value = input<readonly TuiPoint[], readonly TuiPoint[]>([], {
        transform: (value) => value.filter((item) => !item.some(Number.isNaN)),
    });

    public readonly hovered = signal<number>(NaN);

    public onHovered(index: number): void {
        this.hovered.set(index);
    }

    protected get hintContent(): PolymorpheusContent<TuiLineChartHintContext<TuiPoint>> {
        return this.hintOptions?.content() || '';
    }

    protected get fillId(): string {
        return `tui-line-chart-${this.autoId}`;
    }

    protected get fill(): string {
        return this.filled() ? `url(#${this.fillId})` : 'none';
    }

    protected get isFocusable(): boolean {
        return !this.hintDirective && this.hasHints;
    }

    protected get hasHints(): boolean {
        return (
            !!this.xStringify() ||
            !!this.yStringify() ||
            !!this.hintDirective?.hint() ||
            !!this.hintContent
        );
    }

    protected onMouseLeave(): void {
        if (!this.hintDirective) {
            this.onHovered(NaN);
        }
    }

    protected getX(index: number): number {
        if (this.isSinglePoint) {
            return (this.value()[0]?.[0] || 0) / 2;
        }

        return index
            ? ((this.value()[index - 1]?.[0] || 0) + (this.value()[index]?.[0] || 0)) / 2
            : 2 * (this.value()[0]?.[0] || 0) - this.getX(1);
    }

    protected getWidth(index: number): number {
        return (100 * this.computeWidth(index)) / this.width();
    }

    protected getHintId(index: number): string {
        return `${this.autoId}_${index}`;
    }

    protected getImplicit($implicit: TuiPoint): TuiPoint | readonly TuiPoint[] {
        return (
            this.hintDirective?.getContext(this.value().indexOf($implicit), this) ??
            $implicit
        );
    }

    protected getHovered(hovered: number | null): TuiPoint | null {
        // This checks for NaN and null too since async pipe returns null before first item
        return tuiIsPresent(hovered) && Number.isInteger(hovered)
            ? (this.value()[hovered] ?? null)
            : null;
    }

    protected getBottom(y: number): number {
        return (100 * (y - this.y())) / this.height();
    }

    protected getLeft(x: number): number {
        return (100 * (x - this.x())) / this.width();
    }

    protected getOffset(x: number): number {
        return (
            (100 * ((this.value()[x]?.[0] || 0) - this.getX(x))) / this.computeWidth(x)
        );
    }

    protected onMouseEnter(index: number): void {
        if (this.hintDirective) {
            this.hintDirective.raise(index, this);
        } else {
            this.onHovered(index);
        }
    }

    private get isSinglePoint(): boolean {
        return this.value().length === 1;
    }

    private computeWidth(index: number): number {
        return index === this.value().length - 1
            ? 2 * ((this.value()[index]?.[0] || 0) - this.getX(index))
            : this.getX(index + 1) - this.getX(index);
    }
}
