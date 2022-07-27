import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    TuiCurrency,
    TuiCurrencyCode,
    TuiCurrencyVariants,
    TuiMoneySign,
} from '@taiga-ui/addon-commerce';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiDecimal} from '@taiga-ui/core';

@Component({
    selector: 'example-tui-money',
    templateUrl: './money.template.html',
    changeDetection,
})
export class ExampleTuiMoneyComponent {
    readonly exampleModule = import('./examples/import/import-module.md?raw');

    readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
        LESS: import('./examples/3/index.less?raw'),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import('./examples/4/index.ts?raw'),
        HTML: import('./examples/4/index.html?raw'),
    };

    readonly example5: TuiDocExample = {
        TypeScript: import('./examples/5/index.ts?raw'),
        HTML: import('./examples/5/index.html?raw'),
    };

    readonly decimalVariants: readonly TuiDecimal[] = ['not-zero', 'always', 'never'];

    decimal = this.decimalVariants[0];

    readonly currencyVariants: readonly TuiCurrencyVariants[] = [
        TuiCurrency.Ruble,
        TuiCurrency.Euro,
        TuiCurrency.Dollar,
        TuiCurrency.Pound,
        TuiCurrencyCode.TurkishLira,
        'UGX',
    ];

    currency = this.currencyVariants[0];

    readonly valueVariants: readonly number[] = [-12345.1, 237, 1234, 123123414.0234, 0];

    value = this.valueVariants[0];

    colored = false;

    readonly signVariants: readonly TuiMoneySign[] = [
        'negative-only',
        'always',
        'never',
        'force-negative',
        'force-positive',
    ];

    sign = this.signVariants[0];

    readonly precisionVariants: readonly number[] = [2, 3, 4];

    precision = this.precisionVariants[0];

    singleColor = false;
}
