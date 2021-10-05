import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';

import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';

import {default as example3Html} from '!!raw-loader!./examples/3/index.html';
import {default as example3Less} from '!!raw-loader!./examples/3/index.less';
import {default as example3Ts} from '!!raw-loader!./examples/3/index.ts';

import {default as example4Html} from '!!raw-loader!./examples/4/index.html';
import {default as example4Ts} from '!!raw-loader!./examples/4/index.ts';

import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {Component} from '@angular/core';
import {
    TuiCurrency,
    TuiCurrencyCode,
    TuiCurrencyVariants,
    TuiMoneySignT,
} from '@taiga-ui/addon-commerce';
import {TuiDecimalT} from '@taiga-ui/core';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tui-money',
    templateUrl: './money.template.html',
    changeDetection,
})
export class ExampleTuiMoneyComponent {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
    };

    readonly example3: FrontEndExample = {
        TypeScript: example3Ts,
        HTML: example3Html,
        LESS: example3Less,
    };

    readonly example4: FrontEndExample = {
        TypeScript: example4Ts,
        HTML: example4Html,
    };

    readonly decimalVariants: readonly TuiDecimalT[] = ['not-zero', 'always', 'never'];

    decimal = this.decimalVariants[0];

    readonly currencyVariants: ReadonlyArray<TuiCurrencyVariants> = [
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

    readonly signVariants: readonly TuiMoneySignT[] = [
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
