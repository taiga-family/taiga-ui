import {AsyncPipe} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    input,
    output,
    viewChildren,
} from '@angular/core';
import {TuiBarSet} from '@taiga-ui/addon-charts/components/bar-set';
import {TuiChartHint} from '@taiga-ui/addon-charts/components/chart-hint';
import {TuiMapperPipe} from '@taiga-ui/cdk/pipes/mapper';
import {type TuiContext, type TuiMapper} from '@taiga-ui/cdk/types';
import {tuiSum} from '@taiga-ui/cdk/utils/math';
import {tuiGenerateId} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiHint, TuiHintHover, tuiHintOptionsProvider} from '@taiga-ui/core/portals/hint';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

@Component({
    selector: 'tui-bar-chart',
    imports: [AsyncPipe, TuiBarSet, TuiHint, TuiMapperPipe],
    templateUrl: './bar-chart.template.html',
    styleUrl: './bar-chart.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    viewProviders: [tuiHintOptionsProvider({direction: 'top'})],
})
export class TuiBarChart {
    private readonly hintOptions = inject(TuiChartHint, {optional: true});
    private readonly autoId = tuiGenerateId();

    private readonly getMax = computed(() =>
        this.collapsed()
            ? Math.max(
                  // eslint-disable-next-line no-restricted-syntax
                  ...this.value().reduce((result, next) =>
                      result.map((value, index) => value + (next[index] || 0)),
                  ),
              )
            : this.value().reduce((max, value) => Math.max(...value, max), 0),
    );

    private readonly getMin = computed(() =>
        this.collapsed()
            ? 0
            : this.value().reduce((min, value) => Math.min(...value, min), 0),
    );

    protected readonly transposed = computed(() =>
        this.value().reduce<ReadonlyArray<readonly number[]>>(
            (result, next) =>
                next.map((_, index) => [...(result[index] || []), next[index] || 0]),
            [],
        ),
    );

    protected readonly drivers = viewChildren(TuiHintHover);

    public readonly value = input<ReadonlyArray<readonly number[]>>([]);
    public readonly max = input(Number.NaN);
    public readonly min = input(Number.NaN);
    public readonly size = input<TuiSizeL | TuiSizeS | null>('m');
    public readonly collapsed = input(false);
    public readonly tapColumn = output<number>();
    public readonly computedMax = computed(() => this.max() || this.getMax());
    public readonly computedMin = computed(() => this.min() || this.getMin());

    public readonly computedRange = computed(
        () => this.computedMax() - this.computedMin() || 1,
    );

    public readonly zeroLineDistance = computed(
        () =>
            (this.collapsed() ? 0 : (100 * -this.computedMin()) / this.computedRange()) ||
            0,
    );

    protected readonly denominator = computed(() =>
        this.collapsed() ? this.computedMax() : this.computedRange(),
    );

    public readonly percentMapper: TuiMapper<
        [readonly number[], boolean, number],
        number
    > = (set, collapsed, denominator) =>
        (100 *
            (collapsed ? tuiSum(...set.map(Math.abs)) : this.getColumnExtension(set))) /
        denominator;

    protected get hintContent(): PolymorpheusContent<TuiContext<number>> {
        return this.hintOptions?.content() || '';
    }

    protected get hintAppearance(): string {
        return this.hintOptions?.appearance() || '';
    }

    protected getHintId(index: number): string {
        return `${this.autoId}_${index}`;
    }

    private getColumnExtension(set: readonly number[]): number {
        return set.some((value) => value > 0)
            ? Math.max(...set)
            : Math.abs(Math.min(...set, 0));
    }
}
