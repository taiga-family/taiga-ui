import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Input,
    QueryList,
    ViewChildren,
} from '@angular/core';
import {
    EMPTY_QUERY,
    TuiContext,
    TuiIdService,
    tuiPure,
    tuiSum,
    TuiTypedMapper,
} from '@taiga-ui/cdk';
import {
    TuiHintHoverDirective,
    TuiHintOptionsDirective,
    tuiHintOptionsProvider,
    TuiSizeL,
    TuiSizeS,
} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';

@Component({
    selector: 'tui-bar-chart',
    templateUrl: './bar-chart.template.html',
    styleUrls: ['./bar-chart.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    viewProviders: [tuiHintOptionsProvider({direction: 'top'})],
})
export class TuiBarChartComponent {
    private readonly hintOptions = inject(TuiHintOptionsDirective, {optional: true});
    private readonly autoIdString = inject(TuiIdService).generate();

    @ViewChildren(TuiHintHoverDirective)
    protected readonly drivers: QueryList<Observable<boolean>> = EMPTY_QUERY;

    @Input()
    public value: ReadonlyArray<readonly number[]> = [];

    @Input()
    public max = NaN;

    @Input()
    public size: TuiSizeL | TuiSizeS | null = 'm';

    @Input()
    public collapsed = false;

    protected get hintContent(): PolymorpheusContent<TuiContext<number>> {
        return this.hintOptions?.content || '';
    }

    public get transposed(): ReadonlyArray<readonly number[]> {
        return this.transpose(this.value);
    }

    public get computedMax(): number {
        return this.max || this.getMax(this.value, this.collapsed);
    }

    public readonly percentMapper: TuiTypedMapper<
        [readonly number[], boolean, number],
        number
    > = (set, collapsed, max) =>
        (100 * (collapsed ? tuiSum(...set) : Math.max(...set))) / max;

    protected getHintId(index: number): string {
        return `${this.autoIdString}_${index}`;
    }

    @tuiPure
    private transpose(
        value: ReadonlyArray<readonly number[]>,
    ): ReadonlyArray<readonly number[]> {
        return value.reduce<ReadonlyArray<readonly number[]>>(
            (result, next) =>
                next.map((_, index) => [...(result[index] || []), next[index]]),
            [],
        );
    }

    @tuiPure
    private getMax(values: ReadonlyArray<readonly number[]>, collapsed: boolean): number {
        return collapsed
            ? Math.max(
                  // eslint-disable-next-line no-restricted-syntax
                  ...values.reduce((result, next) =>
                      result.map((value, index) => value + next[index]),
                  ),
              )
            : values.reduce((max, value) => Math.max(...value, max), 0);
    }
}
