import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

import {default as example1Ts} from '!!raw-loader!./examples/1/component.ts';
import {default as example1Html} from '!!raw-loader!./examples/1/template.html';
import {default as exampleModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleHtml} from '!!raw-loader!./examples/import/insert-template.txt';

import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tui-filter',
    templateUrl: './filter.template.html',
    changeDetection,
})
export class ExampleTuiFilterComponent {
    readonly exampleModule = exampleModule;
    readonly exampleHtml = exampleHtml;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };
}
