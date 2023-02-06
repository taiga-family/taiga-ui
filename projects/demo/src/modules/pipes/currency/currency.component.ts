import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'example-tui-currency',
    templateUrl: './currency.template.html',
    changeDetection,
})
export class ExampleTuiCurrencyComponent {
    readonly exampleModule = import('!!raw-loader!./examples/import/import-module.md');
    readonly exampleHtml = import('!!raw-loader!./examples/import/insert-template.md');

    readonly example1: TuiDocExample = {
        HTML: import('!!raw-loader!./examples/1/template.html'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/2/component.ts'),
        HTML: import('!!raw-loader!./examples/2/template.html'),
    };

    readonly currencyVariants = [null, 826, 840, 'EUR', 'RUB', 'UGX', 'USD'];
    currency = this.currencyVariants[0];

    readonly control = new FormControl(6432, Validators.required);
}
