import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';
import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Less} from '!!raw-loader!./examples/2/index.less';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';
import {default as example3Html} from '!!raw-loader!./examples/3/index.html';
import {default as example3Less} from '!!raw-loader!./examples/3/index.less';
import {default as example3Ts} from '!!raw-loader!./examples/3/index.ts';
import {default as example4Html} from '!!raw-loader!./examples/4/index.html';
import {default as example4Ts} from '!!raw-loader!./examples/4/index.ts';
import {default as example5Content} from '!!raw-loader!./examples/5/content';
import {default as example5ContentLess} from '!!raw-loader!./examples/5/content.less';
import {default as example5Html} from '!!raw-loader!./examples/5/index.html';
import {default as example5Less} from '!!raw-loader!./examples/5/index.less';
import {default as example5Ts} from '!!raw-loader!./examples/5/index.ts';
import {default as example6Html} from '!!raw-loader!./examples/6/index.html';
import {default as example6Ts} from '!!raw-loader!./examples/6/index.ts';
import {default as example7Html} from '!!raw-loader!./examples/7/index.html';
import {default as example7Less} from '!!raw-loader!./examples/7/index.less';
import {default as example7Ts} from '!!raw-loader!./examples/7/index.ts';
import {default as example7Service} from '!!raw-loader!./examples/7/service';
import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tree',
    templateUrl: './tree.template.html',
    changeDetection,
})
export class ExampleTuiTreeComponent {
    readonly exampleImportModule = exampleImportModule;

    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
        LESS: example2Less,
    };

    readonly example3: FrontEndExample = {
        TypeScript: example3Ts,
        HTML: example3Html,
        LESS: example3Less,
    };

    readonly example4: FrontEndExample = {
        TypeScript: example4Ts,
        HTML: example4Html,
    };

    readonly example5 = {
        TypeScript: example5Ts,
        HTML: example5Html,
        LESS: example5Less,
        'content.ts': example5Content,
        'content.less': example5ContentLess,
    };

    readonly example6: FrontEndExample = {
        TypeScript: example6Ts,
        HTML: example6Html,
    };

    readonly example7 = {
        TypeScript: example7Ts,
        HTML: example7Html,
        LESS: example7Less,
        'service.ts': example7Service,
    };
}
