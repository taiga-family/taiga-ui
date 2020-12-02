import * as example1Html from '!!raw-loader!./examples/1/index.html';
import * as example1Ts from '!!raw-loader!./examples/1/index.ts';
import * as exampleComponent from '!!raw-loader!./examples/import/component.txt';
import * as exampleImportModule from '!!raw-loader!./examples/import/import-module.txt';
import * as exampleInsertTemplate from '!!raw-loader!./examples/import/insert-template.txt';

import {Component} from '@angular/core';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tui-active-zone',
    templateUrl: './active-zone.template.html',
    styleUrls: ['./active-zone.style.less'],
    changeDetection,
})
export class ExampleTuiActiveZoneComponent {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;
    readonly exampleComponent = exampleComponent;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };
}
