import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {type TuiDocExample} from '@taiga-ui/addon-doc';
import {type TuiDecimalSymbol} from '@taiga-ui/core';

@Component({
    selector: 'example-tui-format-number',
    templateUrl: './format-number.template.html',
    styleUrls: ['./format-number.style.less'],
    changeDetection,
})
export class ExampleTuiFormatNumberComponent {
    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    protected value = 100;

    protected readonly decimalLimitVariants = [Infinity, 0, 2, 4];
    protected decimalLimit = this.decimalLimitVariants[0];

    protected readonly decimalSeparatorVariants: TuiDecimalSymbol[] = [',', '.'];
    protected decimalSeparator: TuiDecimalSymbol = this.decimalSeparatorVariants[0];
}
