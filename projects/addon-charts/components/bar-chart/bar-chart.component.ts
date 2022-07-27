import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {TUI_DEFAULT_COLOR_HANDLER} from '@taiga-ui/addon-charts/constants';
import {TuiColorHandler} from '@taiga-ui/addon-charts/types';
import {
    sum,
    TuiContextWithImplicit,
    tuiDefaultProp,
    TuiIdService,
    TuiMapper,
    tuiPure,
} from '@taiga-ui/cdk';
import {TuiHintModeT, TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

// eslint-disable-next-line @typescript-eslint/naming-convention
export function valueAssertion(value: ReadonlyArray<readonly number[]>): boolean {
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

    @Input()
    @tuiDefaultProp(valueAssertion, VALUE_ERROR)
    value: ReadonlyArray<readonly number[]> = [];

    @Input()
    @tuiDefaultProp()
    max = NaN;

    @Input()
    @tuiDefaultProp()
    colorHandler: TuiColorHandler = TUI_DEFAULT_COLOR_HANDLER;

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
    hintMode: TuiHintModeT | null = null;

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

    @tuiPure
    getContentContext(index: number): TuiContextWithImplicit<number> {
        return {
            $implicit: index,
        };
    }

    readonly percentMapper: TuiMapper<readonly number[], number> = (
        set,
        collapsed: boolean,
        max: number,
    ) => (100 * (collapsed ? sum(...set) : Math.max(...set))) / max;

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
