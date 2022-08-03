import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiCurrency, tuiGetCurrencySymbol} from '@taiga-ui/addon-commerce';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {formatNumber, TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

const MONTHS: readonly string[] = [
    `Jan 2019`,
    `Feb`,
    `Mar`,
    `Apr`,
    `May`,
    `Jun`,
    `Jul`,
    `Aug`,
    `Sep`,
    `Oct`,
    `Nov`,
    `Dec`,
];

@Component({
    selector: `example-tui-bar-chart`,
    templateUrl: `./bar-chart.template.html`,
    styleUrls: [`./bar-chart.style.less`],
    changeDetection,
})
export class ExampleTuiBarChartComponent {
    readonly exampleModule = import(`./examples/import/import-module.md?raw`);
    readonly exampleHtml = import(`./examples/import/insert-template.md?raw`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`./examples/1/index.ts?raw`),
        HTML: import(`./examples/1/index.html?raw`),
        LESS: import(`./examples/1/index.less?raw`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`./examples/2/index.ts?raw`),
        HTML: import(`./examples/2/index.html?raw`),
        LESS: import(`./examples/2/index.less?raw`),
    };

    collapsed = false;

    readonly sizeVariants: ReadonlyArray<TuiSizeS | TuiSizeL> = [`s`, `m`, `l`];

    size: TuiSizeS | TuiSizeL | null = null;

    max = 0;

    readonly valueVariants = [
        [
            [30000, 20500, 12345],
            [12422, 16124, 22424],
        ],
        [
            [30, 65, 30, 80, 54],
            [98, 48, 33, 25, 11],
            [55, 10, 27, 36, 73],
        ],
    ];

    value = this.valueVariants[0];

    readonly contentVariants: ReadonlyArray<
        PolymorpheusContent<TuiContextWithImplicit<number>>
    > = [
        ``,
        ({$implicit}) => this.getHint($implicit),
        ({$implicit}) => MONTHS[$implicit],
    ];

    hintContent = this.contentVariants[0];

    readonly hintAppearanceVariants = [``, `onDark`, `error`];

    hintAppearance = this.hintAppearanceVariants[0];

    getHint(index: number): string {
        return this.value
            .reduce(
                (result, set) =>
                    `${result}${formatNumber(set[index])} ${tuiGetCurrencySymbol(
                        TuiCurrency.Ruble,
                    )}\n`,
                ``,
            )
            .trim();
    }
}
