import {
    ChangeDetectionStrategy,
    Component,
    Inject,
    Input,
    QueryList,
    ViewChildren,
} from '@angular/core';
import {
    EMPTY_QUERY,
    TuiContextWithImplicit,
    tuiDefaultProp,
    TuiIdService,
    TuiMapper,
    tuiPure,
    tuiSum,
} from '@taiga-ui/cdk';
import {TuiDriver, TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';

function valueAssertion(value: ReadonlyArray<readonly number[]>): boolean {
    const valid = value.every(array => array.length === value[0].length);

    return valid;
}

const VALUE_ERROR = `All arrays must be of the same length`;

@Component({
    selector: `tui-bar-chart`,
    templateUrl: `./bar-chart.template.html`,
    styleUrls: [`./bar-chart.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiBarChartComponent {
    private readonly autoIdString: string;

    @ViewChildren(TuiDriver)
    readonly drivers: QueryList<Observable<boolean>> = EMPTY_QUERY;

    @Input()
    @tuiDefaultProp(valueAssertion, VALUE_ERROR)
    value: ReadonlyArray<readonly number[]> = [];

    @Input()
    @tuiDefaultProp()
    max = NaN;

    @Input()
    @tuiDefaultProp()
    size: TuiSizeS | TuiSizeL | null = `m`;

    @Input()
    @tuiDefaultProp()
    collapsed = false;

    @Input()
    @tuiDefaultProp()
    hintContent: PolymorpheusContent<TuiContextWithImplicit<number>> = ``;

    @Input()
    @tuiDefaultProp()
    hintAppearance = ``;

    constructor(@Inject(TuiIdService) idService: TuiIdService) {
        this.autoIdString = idService.generate();
    }

    get hasHint(): boolean {
        return !!this.hintContent;
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

    getHint(hint: PolymorpheusContent): PolymorpheusContent {
        return this.hasHint ? hint : ``;
    }

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
