import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: `example-tui-currency`,
    templateUrl: `./currency.template.html`,
    changeDetection,
})
export class ExampleTuiCurrencyComponent {
    readonly exampleModule = import(`./examples/import/import-module.md?raw`);
    readonly exampleHtml = import(`./examples/import/insert-template.md?raw`);

    readonly example1: TuiDocExample = {
        HTML: import(`./examples/1/template.html?raw`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`./examples/2/component.ts?raw`),
        HTML: import(`./examples/2/template.html?raw`),
    };

    readonly currencyVariants = [null, 826, 840, `EUR`, `RUB`, `UGX`, `USD`];
    currency = this.currencyVariants[0];

    readonly control = new FormControl(6432, Validators.required);
}
