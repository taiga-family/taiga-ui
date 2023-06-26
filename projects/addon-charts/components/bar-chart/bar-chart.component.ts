import {
    ChangeDetectionStrategy,
    Component,
    Inject,
    Input,
    Optional,
    QueryList,
    ViewChildren,
} from '@angular/core';
import {
    EMPTY_QUERY,
    TuiContextWithImplicit,
    TuiIdService,
    TuiMapper,
    tuiPure,
    tuiSum,
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
    private readonly autoIdString: string;

    @ViewChildren(TuiHintHoverDirective)
    readonly drivers: QueryList<Observable<boolean>> = EMPTY_QUERY;

    @Input()
    value: ReadonlyArray<readonly number[]> = [];

    @Input()
    max = NaN;

    @Input()
    size: TuiSizeL | TuiSizeS | null = 'm';

    @Input()
    collapsed = false;

    constructor(
        @Optional()
        @Inject(TuiHintOptionsDirective)
        private readonly hintOptions: TuiHintOptionsDirective | null,
        @Inject(TuiIdService) idService: TuiIdService,
    ) {
        this.autoIdString = idService.generate();
    }

    get hintContent(): PolymorpheusContent<TuiContextWithImplicit<number>> {
        return this.hintOptions?.content || '';
    }

    get transposed(): ReadonlyArray<readonly number[]> {
        return this.transpose(this.value);
    }

    get computedMax(): number {
        return this.max || this.getMax(this.value, this.collapsed);
    }

    readonly percentMapper: TuiMapper<readonly number[], number> = (
        set,
        collapsed: boolean,
        max: number,
    ) => (100 * (collapsed ? tuiSum(...set) : Math.max(...set))) / max;

    getHintId(index: number): string {
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
                  ...values.reduce((result, next) =>
                      result.map((value, index) => value + next[index]),
                  ),
              )
            : values.reduce((max, value) => Math.max(...value, max), 0);
    }
}
