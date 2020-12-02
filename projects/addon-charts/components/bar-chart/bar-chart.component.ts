import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {TUI_DEFAULT_COLOR_HANDLER} from '@taiga-ui/addon-charts/constants';
import {TuiColorHandler} from '@taiga-ui/addon-charts/types';
import {
    TuiContextWithImplicit,
    tuiDefaultProp,
    TuiIdService,
    tuiPure,
} from '@taiga-ui/cdk';
import {TuiHintMode, TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export function valueAssertion(value: ReadonlyArray<ReadonlyArray<number>>): boolean {
    const valid = value.every(array => array.length === value[0].length);

    return valid;
}

const VALUE_ERROR = 'All arrays must be of the same length';

@Component({
    selector: 'tui-bar-chart',
    templateUrl: './bar-chart.template.html',
    styleUrls: ['./bar-chart.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiBarChartComponent {
    @Input()
    @tuiDefaultProp(valueAssertion, VALUE_ERROR)
    value: ReadonlyArray<ReadonlyArray<number>> = [];

    @Input()
    @tuiDefaultProp()
    max = NaN;

    @Input()
    @tuiDefaultProp()
    colorHandler: TuiColorHandler = TUI_DEFAULT_COLOR_HANDLER;

    @Input()
    @tuiDefaultProp()
    size: TuiSizeS | TuiSizeL | null = 'm';

    @Input()
    @tuiDefaultProp()
    collapsed = false;

    @Input()
    @tuiDefaultProp()
    hintContent: PolymorpheusContent<TuiContextWithImplicit<number>> | null = null;

    @Input()
    @tuiDefaultProp()
    hintMode: TuiHintMode | null = null;

    private readonly autoIdString: string;

    constructor(@Inject(TuiIdService) idService: TuiIdService) {
        this.autoIdString = idService.generate();
    }

    get hasHint(): boolean {
        return !!this.hintContent;
    }

    get transposed(): ReadonlyArray<ReadonlyArray<number>> {
        return this.transpose(this.value);
    }

    get computedMax(): number {
        return this.max || this.getMax(this.value);
    }

    getPercent(set: ReadonlyArray<number>): number {
        return (100 * Math.max(...set)) / this.computedMax;
    }

    getHint(hint: PolymorpheusContent): PolymorpheusContent | null {
        return this.hasHint ? hint : null;
    }

    getHintId(index: number): string {
        return `${this.autoIdString}_${index}`;
    }

    @tuiPure
    getContentContext(index: number): TuiContextWithImplicit<number> {
        return {
            $implicit: index,
        };
    }

    @tuiPure
    private transpose(
        value: ReadonlyArray<ReadonlyArray<number>>,
    ): ReadonlyArray<ReadonlyArray<number>> {
        return value.reduce<ReadonlyArray<ReadonlyArray<number>>>(
            (result, next) =>
                next.map((_, index) => [...(result[index] || []), next[index]]),
            [],
        );
    }

    @tuiPure
    private getMax(value: ReadonlyArray<ReadonlyArray<number>>): number {
        return value.reduce((max, value) => Math.max(...value, max), 0);
    }
}
