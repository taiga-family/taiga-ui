import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'example-tui-format-number',
    templateUrl: './format-number.template.html',
    styleUrls: ['./format-number.style.less'],
    changeDetection,
})
export class ExampleTuiFormatNumberComponent {
    readonly exampleModule = import('!!raw-loader!./examples/import/import-module.md');
    readonly exampleHtml = import('!!raw-loader!./examples/import/insert-template.md');

    readonly example1: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
        HTML: import('!!raw-loader!./examples/1/index.html'),
    };

    value = 100;

    readonly decimalLimitVariants = [0, 2, 4];
    decimalLimit: number | null = null;

    readonly decimalSeparatorVariants: readonly string[] = [',', '.', '/'];
    decimalSeparator = this.decimalSeparatorVariants[0];
}
