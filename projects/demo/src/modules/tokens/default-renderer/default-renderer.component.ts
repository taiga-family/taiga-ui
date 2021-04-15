import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {default as example1Html} from '!!raw-loader!./examples/1/template.html';

import {default as example2Ts} from '!!raw-loader!./examples/2/component.ts';
import {default as example2Html} from '!!raw-loader!./examples/2/template.html';

import {Component} from '@angular/core';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tui-default-renderer',
    templateUrl: './default-renderer.template.html',
    changeDetection,
})
export class ExampleTuiDefaultRendererComponent {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly example1: FrontEndExample = {
        HTML: example1Html,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
    };
}
