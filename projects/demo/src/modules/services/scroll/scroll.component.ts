import * as example1Html from '!!raw-loader!./examples/1/index.html';
import * as example1Less from '!!raw-loader!./examples/1/index.less';
import * as example1Ts from '!!raw-loader!./examples/1/index.ts';
import * as exampleImportModule from '!!raw-loader!./examples/import/import-module.txt';
import * as exampleInjectService from '!!raw-loader!./examples/import/inject-service.html';
import * as exampleScroll from '!!raw-loader!./examples/import/scroll.html';

import {Component} from '@angular/core';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

// TODO: Update to use new scroll$
@Component({
    selector: 'example-tui-scrollbar',
    templateUrl: './scroll.template.html',
    styleUrls: ['./scroll.style.less'],
    changeDetection,
})
export class ExampleTuiScrollComponent {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInjectService = exampleInjectService;
    readonly exampleScroll = exampleScroll;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
        LESS: example1Less,
    };
}
