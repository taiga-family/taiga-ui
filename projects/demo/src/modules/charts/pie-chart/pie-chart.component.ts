import * as example1Html from '!!raw-loader!./examples/1/index.html';
import * as example1Less from '!!raw-loader!./examples/1/index.less';
import * as example1Ts from '!!raw-loader!./examples/1/index.ts';

import * as example2Html from '!!raw-loader!./examples/2/index.html';
import * as example2Ts from '!!raw-loader!./examples/2/index.ts';

import * as exampleImportModule from '!!raw-loader!./examples/import/import-module.txt';
import * as exampleInsertTemplate from '!!raw-loader!./examples/import/insert-template.txt';
import {Component} from '@angular/core';
import {TUI_DEFAULT_COLOR_HANDLER, TuiColorHandler} from '@taiga-ui/addon-charts';
import {getCurrencySymbol, TuiCurrency} from '@taiga-ui/addon-commerce';
import {round, sum, TuiContextWithImplicit} from '@taiga-ui/cdk';
import {formatNumber, TuiBaseColor, TuiSizeXL, TuiSizeXS} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

const zebraHandler: TuiColorHandler = index =>
    index % 2 ? TuiBaseColor.Success : TuiBaseColor.Error;

@Component({
    selector: 'example-tui-pie-chart',
    templateUrl: './pie-chart.template.html',
    styleUrls: ['./pie-chart.style.less'],
    changeDetection,
})
export class ExampleTuiPieChartComponent {
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
    };

    readonly valueVariants = [
        [40, 30, 20, 10],
        [13769, 12367, 10172, 3018, 2592],
    ];

    value = this.valueVariants[0];

    readonly activeItemIndexVariants = [0, 1, 2];

    activeItemIndex = null;

    readonly sizeVariants: ReadonlyArray<TuiSizeXS | TuiSizeXL> = [
        'xs',
        's',
        'm',
        'l',
        'xl',
    ];

    size = this.sizeVariants[2];

    readonly colorHandlerVariants: ReadonlyArray<TuiColorHandler> = [
        TUI_DEFAULT_COLOR_HANDLER,
        zebraHandler,
    ];

    colorHandler = this.colorHandlerVariants[0];

    readonly contentVariants: ReadonlyArray<
        PolymorpheusContent<TuiContextWithImplicit<number>>
    > = [
        ({$implicit}) => this.getPercent($implicit),
        ({$implicit}) => this.format($implicit),
    ];

    hintContent: PolymorpheusContent<TuiContextWithImplicit<number>> | null = null;

    getPercent(index: number): string {
        return `${round((100 * this.value[index]) / sum(...this.value), 2)} %`;
    }

    format(index: number): string {
        return `${formatNumber(this.value[index])} ${getCurrencySymbol(
            TuiCurrency.Ruble,
        )}`;
    }
}
