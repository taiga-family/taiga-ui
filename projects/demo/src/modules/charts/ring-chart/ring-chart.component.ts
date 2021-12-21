import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiRingChartContext} from '@taiga-ui/addon-charts';
import {round, sum} from '@taiga-ui/cdk';
import {formatNumber, TuiSizeS, TuiSizeXL} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Less} from '!!raw-loader!./examples/1/index.less';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';
import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Less} from '!!raw-loader!./examples/2/index.less';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';
import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tui-ring-chart',
    templateUrl: './ring-chart.template.html',
    styleUrls: ['./ring-chart.style.less'],
    changeDetection,
})
export class ExampleTuiRingChartComponent {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
        LESS: example1Less,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
        LESS: example2Less,
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
