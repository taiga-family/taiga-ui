import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';
import {default as exampleModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleHtml} from '!!raw-loader!./examples/import/insert-template.txt';

import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tui-format-number',
    templateUrl: './format-number.template.html',
    styleUrls: ['./format-number.style.less'],
    changeDetection,
})
export class ExampleTuiFormatNumberComponent {
    readonly exampleModule = exampleModule;
    readonly exampleHtml = exampleHtml;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    value = 100;

    readonly decimalLimitVariants = [0, 2, 4];
    decimalLimit: number | null = null;

    readonly decimalSeparatorVariants: readonly string[] = [',', '.', '/'];
    decimalSeparator = this.decimalSeparatorVariants[0];
}
