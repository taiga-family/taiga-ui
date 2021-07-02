import {Component} from '@angular/core';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as exampleLESS} from '!!raw-loader!./examples/1/index.less';

import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';

import {default as example3Html} from '!!raw-loader!./examples/3/index.html';
import {default as example3Ts} from '!!raw-loader!./examples/3/index.ts';

import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

@Component({
    selector: 'example-dropdown-context',
    templateUrl: './dropdown-context.component.html',
    changeDetection,
})
export class ExampleTuiDropdownContextComponent {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly exampleBasic: FrontEndExample = {
        HTML: example1Html,
        LESS: exampleLESS,
    };

    readonly exampleContextMenu: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
    };

    readonly exampleReportMistakeForm: FrontEndExample = {
        TypeScript: example3Ts,
        HTML: example3Html,
    };
}
