import {Component} from '@angular/core';

import * as exampleImportModule from '!!raw-loader!./examples/import/import-module.txt';
import * as exampleInsertTemplate from '!!raw-loader!./examples/import/insert-template.txt';

import * as example1Html from '!!raw-loader!./examples/1/index.html';
import * as example1Less from '!!raw-loader!./examples/1/index.less';
import * as example1Ts from '!!raw-loader!./examples/1/index.ts';

import * as example2Html from '!!raw-loader!./examples/2/index.html';
import * as example2Ts from '!!raw-loader!./examples/2/index.ts';
import {changeDetection} from '../../../change-detection-strategy';
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

    readonly exampleImportModule = exampleImportModule;

    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly iconVariants = [
        'tuiIconPrintLarge',
        'tuiIconLoginLarge',
        'tuiIconPhoneLarge',
    ];

    icon = this.iconVariants[0];
}
