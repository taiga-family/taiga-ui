import {
    ChangeDetectionStrategy,
    Component,
    Inject,
    Input,
    Optional,
    QueryList,
    ViewChildren,
} from '@angular/core';
import type {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {
    EMPTY_QUERY,
    tuiDefaultProp,
    TuiIdService,
    TuiMapper,
    tuiPure,
    tuiSum,
} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {TuiDriver, TuiHintOptionsDirective} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import type {Observable} from 'rxjs';

// TODO: replace after migration Ivy
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

    constructor(
        @Optional()
        @Inject(TuiHintOptionsDirective)
        private readonly hintOptions: TuiHintOptionsDirective | null,
        @Inject(TuiIdService) idService: TuiIdService,
    ) {
        this.autoIdString = idService.generate();
    }

    get hintContent(): PolymorpheusContent<TuiContextWithImplicit<number>> {
        return this.hintOptions?.content || ``;
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
