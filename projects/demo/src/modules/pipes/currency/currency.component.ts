import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {default as example1Ts} from '!!raw-loader!./examples/1/component.ts';
import {default as example1Html} from '!!raw-loader!./examples/1/template.html';

import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tui-currency',
    templateUrl: './currency.template.html',
    styleUrls: ['./currency.style.less'],
    changeDetection,
})
export class ExampleTuiCurrencyComponent {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    currencyVariants = [null, 826, 840, 'EUR', 'RUB', 'UGX', 'USD'];
    currency = this.currencyVariants[0];

    readonly control = new FormControl(6432, Validators.required);
}
