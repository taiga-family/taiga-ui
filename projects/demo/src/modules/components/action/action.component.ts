import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Less} from '!!raw-loader!./examples/1/index.less';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';
import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';
import {default as exampleModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleHtml} from '!!raw-loader!./examples/import/insert-template.txt';

import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-action',
    templateUrl: './action.template.html',
    changeDetection,
})
export class ExampleTuiActionComponent {
    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
        LESS: example1Less,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
    };

    readonly exampleModule = exampleModule;

    readonly exampleHtml = exampleHtml;

    readonly iconVariants = [
        'tuiIconPrintLarge',
        'tuiIconLoginLarge',
        'tuiIconCalendarLarge',
    ];

    icon = this.iconVariants[0];

    color = 'var(--tui-link)';
    background = 'var(--tui-base-02)';
}
