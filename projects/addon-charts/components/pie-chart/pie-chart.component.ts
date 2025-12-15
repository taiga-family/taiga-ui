import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    input,
    model,
} from '@angular/core';
import {TuiChartHint} from '@taiga-ui/addon-charts/components/chart-hint';
import {TuiHovered} from '@taiga-ui/cdk/directives/hovered';
import {type TuiContext} from '@taiga-ui/cdk/types';
import {tuiSum} from '@taiga-ui/cdk/utils/math';
import {tuiGenerateId} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiHint, tuiHintOptionsProvider} from '@taiga-ui/core/portals/hint';
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
        tuiHintOptionsProvider({
            direction: 'top-right',
            appearance: 'floating',
            showDelay: 0,
            hideDelay: 0,
        }),
    ],
    host: {
        '[attr.data-size]': 'size()',
        '[class._empty]': '!getSum()',
    },
})
export class TuiPieChart {
    private readonly hintOptions = inject(TuiChartHint, {optional: true});
    private readonly autoId = tuiGenerateId();

    protected readonly getSum = computed(() => tuiSum(...this.value()));
    protected readonly segments = computed<ReadonlyArray<[number, number]>>(() =>
        this.value()
            .map((initial, i, array) =>
                array.reduce(
                    (sum, current, j) => (j < i ? this.getDeg(current) + sum : sum),
                    this.getDeg(initial),
                ),
            )
            .map((angle, index, array) => [
                array[index - 1] || 0,
                Math.min(angle, 359.9999),
            ]),
    );

    public readonly value = input<readonly number[]>([]);
    public readonly size = input<TuiSizeXL | TuiSizeXS>('m');
    public readonly masked = input(false);
    public readonly activeItemIndex = model(NaN);

    protected get hintContent(): PolymorpheusContent<TuiContext<number>> {
        return this.hintOptions?.content() || '';
    }

    protected get maskId(): string {
        return `tui-ring-chart-${this.autoId}`;
    }

    protected get mask(): string | null {
        return this.masked() ? `url(#${this.maskId})` : null;
    }

    protected get radius(): string {
        return RADII[this.size()];
    }

    protected getTransform(index: number): string | null {
        const transform = this.masked()
            ? `scale(${TRANSFORM[this.size()]})`
            : `scale(${TRANSFORM.xs})`;

        return index === this.activeItemIndex() ? transform : null;
    }

    protected onHovered(hovered: boolean, index: number): void {
        this.activeItemIndex.set(hovered ? index : NaN);
    }

    private getDeg(value: number): number {
        return 360 * (value / this.getSum()) || 0;
    }
}
