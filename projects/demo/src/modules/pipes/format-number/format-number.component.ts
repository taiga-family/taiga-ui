import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiDecimalSymbol} from '@taiga-ui/core';

@Component({
    selector: `example-tui-format-number`,
    templateUrl: `./format-number.template.html`,
    styleUrls: [`./format-number.style.less`],
    changeDetection,
})
export class ExampleTuiFormatNumberComponent {
    readonly exampleModule = import(`./examples/import/import-module.md?raw`);
    readonly exampleHtml = import(`./examples/import/insert-template.md?raw`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`./examples/1/index.ts?raw`),
        HTML: import(`./examples/1/index.html?raw`),
    };

    value = 100;

    readonly decimalLimitVariants = [Infinity, 0, 2, 4];
    decimalLimit = this.decimalLimitVariants[0];

    readonly decimalSeparatorVariants: TuiDecimalSymbol[] = [`,`, `.`];
    decimalSeparator: TuiDecimalSymbol = this.decimalSeparatorVariants[0];
}
