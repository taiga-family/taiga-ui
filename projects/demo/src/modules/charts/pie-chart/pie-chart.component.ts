import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {getCurrencySymbol, TuiCurrency} from '@taiga-ui/addon-commerce';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {round, sum, TuiContextWithImplicit} from '@taiga-ui/cdk';
import {formatNumber, TuiSizeXL, TuiSizeXS} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'example-tui-pie-chart',
    templateUrl: './pie-chart.template.html',
    styleUrls: ['./pie-chart.style.less'],
    changeDetection,
})
export class ExampleTuiPieChartComponent {
    readonly exampleModule = import('!!raw-loader!./examples/import/import-module.md');
    readonly exampleHtml = import('!!raw-loader!./examples/import/insert-template.md');

    readonly example1: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
        HTML: import('!!raw-loader!./examples/1/index.html'),
        LESS: import('!!raw-loader!./examples/1/index.less'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/2/index.ts'),
        HTML: import('!!raw-loader!./examples/2/index.html'),
        LESS: import('!!raw-loader!./examples/2/index.less'),
    };

    readonly valueVariants = [
        [0, 30, 20, 10],
        [40, 30, 20, 10],
        [13769, 12367, 10172, 3018, 2592],
    ];

    value = this.valueVariants[0];

    readonly activeItemIndexVariants = [NaN, 0, 1, 2];

    activeItemIndex = this.activeItemIndexVariants[0];

    readonly sizeVariants: ReadonlyArray<TuiSizeXS | TuiSizeXL> = [
        'xs',
        's',
        'm',
        'l',
        'xl',
    ];

    size = this.sizeVariants[2];

    readonly contentVariants: ReadonlyArray<
        PolymorpheusContent<TuiContextWithImplicit<number>>
    > = [
        '',
        ({$implicit}) => this.getPercent($implicit),
        ({$implicit}) => this.format($implicit),
    ];

    hintContent = this.contentVariants[0];

    getPercent(index: number): string {
        return `${round((100 * this.value[index]) / sum(...this.value), 2)} %`;
    }

    format(index: number): string {
        return `${formatNumber(this.value[index])} ${getCurrencySymbol(
            TuiCurrency.Ruble,
        )}`;
    }
}
