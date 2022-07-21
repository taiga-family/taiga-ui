import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiRingChartContext} from '@taiga-ui/addon-charts';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {round, sum} from '@taiga-ui/cdk';
import {formatNumber, TuiSizeS, TuiSizeXL} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'example-tui-ring-chart',
    templateUrl: './ring-chart.template.html',
    styleUrls: ['./ring-chart.style.less'],
    changeDetection,
})
export class ExampleTuiRingChartComponent {
    readonly exampleModule = import('./examples/import/import-module.md?raw');
    readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
    };

    readonly valueVariants = [
        [40, 30, 20, 10],
        [13769, 10172, 3018, 2592],
    ];

    value = this.valueVariants[0];

    readonly activeItemIndexVariants = [NaN, 0, 1, 2];

    activeItemIndex = this.activeItemIndexVariants[0];

    readonly sizeVariants: ReadonlyArray<TuiSizeS | TuiSizeXL> = ['s', 'm', 'l', 'xl'];

    size = this.sizeVariants[1];

    readonly contentVariants: ReadonlyArray<PolymorpheusContent<TuiRingChartContext>> = [
        '',
        ({$implicit, value}) =>
            isNaN($implicit)
                ? ''
                : `${round((100 * value[$implicit]) / sum(...value), 2)} %`,
        ({$implicit, value}) =>
            isNaN($implicit)
                ? `${formatNumber(sum(...value))}\nTotal`
                : `${formatNumber(value[$implicit])}\nSegment №${$implicit + 1}`,
    ];

    content = this.contentVariants[0];
}
