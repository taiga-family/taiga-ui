import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {default as example1Ts} from '!!raw-loader!./examples/1/component.ts';
import {default as example1Html} from '!!raw-loader!./examples/1/template.html';

import {Component} from '@angular/core';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tui-filter',
    templateUrl: './filter.template.html',
    styleUrls: ['./filter.style.less'],
    changeDetection,
})
export class ExampleTuiFilterComponent {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };
}
