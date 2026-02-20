import"./chunk-HU6DUUP4.js";var i=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiPieChart} from '@taiga-ui/addon-charts';
import {TuiCurrency, tuiGetCurrencySymbol} from '@taiga-ui/addon-commerce';
import {type TuiContext, tuiRound, tuiSum} from '@taiga-ui/cdk';
import {tuiFormatNumber, type TuiSizeXL, type TuiSizeXS} from '@taiga-ui/core';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

@Component({
    imports: [TuiDemo, TuiPieChart],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Page {
    protected readonly routes = DemoRoute;
    protected readonly valueVariants = [
        [0, 30, 20, 10],
        [40, 30, 20, 10],
        [13769, 12367, 10172, 3018, 2592],
    ];

    protected value = this.valueVariants[0]!;

    protected readonly activeItemIndexVariants = [NaN, 0, 1, 2];

    protected activeItemIndex = this.activeItemIndexVariants[0]!;

    protected readonly sizeVariants: ReadonlyArray<TuiSizeXL | TuiSizeXS> = [
        'xs',
        's',
        'm',
        'l',
        'xl',
    ];

    protected size = this.sizeVariants[2]!;

    protected readonly contentVariants: ReadonlyArray<
        PolymorpheusContent<TuiContext<number>>
    > = [
        '',
        ({$implicit}) => this.getPercent($implicit),
        ({$implicit}) => this.format($implicit),
    ];

    protected hintContent = this.contentVariants[0]!;

    protected getPercent(index: number): string {
        return \`\${tuiRound((100 * (this.value[index] ?? 0)) / tuiSum(...this.value), 2)} %\`;
    }

    protected format(index: number): string {
        return \`\${tuiFormatNumber(this.value[index] ?? 0)} \${tuiGetCurrencySymbol(
            TuiCurrency.Ruble,
        )}\`;
    }
}
`;export{i as default};
