import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    TuiCurrency,
    TuiCurrencyCode,
    TuiCurrencyVariants,
    TuiMoneySign,
} from '@taiga-ui/addon-commerce';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiDecimalT} from '@taiga-ui/core';

@Component({
    selector: 'example-tui-money',
    templateUrl: './money.template.html',
    changeDetection,
})
export class ExampleTuiMoneyComponent {
    readonly exampleModule = import('!!raw-loader!./examples/import/import-module.md');

    readonly exampleHtml = import('!!raw-loader!./examples/import/insert-template.md');

    readonly example1: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
        HTML: import('!!raw-loader!./examples/1/index.html'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/2/index.ts'),
        HTML: import('!!raw-loader!./examples/2/index.html'),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/3/index.ts'),
        HTML: import('!!raw-loader!./examples/3/index.html'),
        LESS: import('!!raw-loader!./examples/3/index.less'),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/4/index.ts'),
        HTML: import('!!raw-loader!./examples/4/index.html'),
    };

    readonly example5: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/5/index.ts'),
        HTML: import('!!raw-loader!./examples/5/index.html'),
    };

    readonly decimalVariants: readonly TuiDecimalT[] = ['not-zero', 'always', 'never'];

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
