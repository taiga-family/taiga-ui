import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostBinding,
    inject,
    Input,
    Output,
} from '@angular/core';
import {SafeValue} from '@angular/platform-browser';
import {TuiContext, TuiIdService, tuiPure, tuiSum} from '@taiga-ui/cdk';
import {
    TuiHintOptionsDirective,
    tuiHintOptionsProvider,
    TuiSizeXL,
    TuiSizeXS,
} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

const RADII = {
    xs: '50',
    s: '50',
    m: '77.8',
    l: '81.9',
    xl: '81.3',
};
const TRANSFORM = {
    xs: 1.15,
    s: 1.25,
    m: 1.11,
    l: 1.09,
    xl: 1.08,
};

@Component({
    selector: 'tui-pie-chart',
    templateUrl: './pie-chart.template.html',
    styleUrls: ['./pie-chart.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    viewProviders: [
        tuiHintOptionsProvider({direction: 'top-right', appearance: 'onDark'}),
    ],
})
export class TuiPieChartComponent {
    private readonly hintOptions = inject(TuiHintOptionsDirective, {optional: true});
    private readonly autoIdString = inject(TuiIdService).generate();

    @Input()
    public value: readonly number[] = [];

    @Input()
    @HostBinding('attr.data-size')
    public size: TuiSizeXL | TuiSizeXS = 'm';

    @Input()
    public masked = false;

    @Input()
    public activeItemIndex = NaN;

    @Output()
    public readonly activeItemIndexChange = new EventEmitter<number>();

    constructor() {
        if (this.hintOptions) {
            this.hintOptions.showDelay = 0;
            this.hintOptions.hideDelay = 0;
        }
    }

    @HostBinding('class._empty')
    protected get empty(): boolean {
        return !this.getSum(this.value);
    }

    protected get hintContent(): PolymorpheusContent<TuiContext<number>> {
        return this.hintOptions?.content || '';
    }

    protected get maskId(): string {
        return `tui-ring-chart-${this.autoIdString}`;
    }

    protected get mask(): string | null {
        return this.masked ? `url(#${this.maskId})` : null;
    }

    protected get radius(): string {
        return RADII[this.size];
    }

    protected get segments(): ReadonlyArray<[number, number]> {
        return this.getSegments(this.value);
    }

    protected getTransform(index: number): string | null {
        const transform = this.masked
            ? `scale(${TRANSFORM[this.size]})`
            : `scale(${TRANSFORM.xs})`;

        return index === this.activeItemIndex ? transform : null;
    }

    protected onHovered(hovered: boolean, index: number): void {
        this.updateActiveItemIndex(hovered ? index : NaN);
    }

    protected getColor(index: number): SafeValue {
        return `var(--tui-chart-${index})`;
    }

    @tuiPure
    private getSum(value: readonly number[]): number {
        return tuiSum(...value);
    }

    @tuiPure
    private getSegments(value: readonly number[]): ReadonlyArray<[number, number]> {
        return value
            .map((initial, i, array) =>
                array.reduce(
                    (sum, current, j) => (j < i ? this.getDeg(current) + sum : sum),
                    this.getDeg(initial),
                ),
            )
            .map((angle, index, array) => [
                array[index - 1] || 0,
                Math.min(angle, 359.9999),
            ]);
    }

    private getDeg(value: number): number {
        return 360 * (value / this.getSum(this.value));
    }

    private updateActiveItemIndex(index: number): void {
        if (index === this.activeItemIndex) {
            return;
        }

        this.activeItemIndex = index;
        this.activeItemIndexChange.next(index);
    }
}
