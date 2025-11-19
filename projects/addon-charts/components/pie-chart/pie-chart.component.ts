import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Input,
    Output,
} from '@angular/core';
import {TuiHovered} from '@taiga-ui/cdk/directives/hovered';
import {type TuiContext} from '@taiga-ui/cdk/types';
import {tuiSum} from '@taiga-ui/cdk/utils/math';
import {tuiGenerateId, tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    TuiHint,
    TuiHintOptionsDirective,
    tuiHintOptionsProvider,
} from '@taiga-ui/core/directives/hint';
import {type TuiSizeXL, type TuiSizeXS} from '@taiga-ui/core/types';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

import {TuiPieChartDirective} from './pie-chart.directive';

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
    imports: [TuiHint, TuiHovered, TuiPieChartDirective],
    templateUrl: './pie-chart.template.html',
    styleUrl: './pie-chart.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    viewProviders: [
        tuiHintOptionsProvider({direction: 'top-right', appearance: 'floating'}),
    ],
    host: {
        '[attr.data-size]': 'size',
        '[class._empty]': 'empty',
    },
})
export class TuiPieChart {
    private readonly hintOptions = inject(TuiHintOptionsDirective, {optional: true});
    private readonly autoId = tuiGenerateId();

    @Input()
    public value: readonly number[] = [];

    @Input()
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

    protected get empty(): boolean {
        return !this.getSum(this.value);
    }

    protected get hintContent(): PolymorpheusContent<TuiContext<number>> {
        return this.hintOptions?.content || '';
    }

    protected get maskId(): string {
        return `tui-ring-chart-${this.autoId}`;
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
        return 360 * (value / this.getSum(this.value)) || 0;
    }

    private updateActiveItemIndex(index: number): void {
        if (index === this.activeItemIndex) {
            return;
        }

        this.activeItemIndex = index;
        this.activeItemIndexChange.next(index);
    }
}
