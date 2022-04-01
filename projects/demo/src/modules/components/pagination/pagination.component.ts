import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiSizeS} from '@taiga-ui/core';

import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';
import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';
import {default as example3Html} from '!!raw-loader!./examples/3/index.html';
import {default as example3Ts} from '!!raw-loader!./examples/3/index.ts';
import {default as example4Html} from '!!raw-loader!./examples/4/index.html';
import {default as example4Ts} from '!!raw-loader!./examples/4/index.ts';
import {default as exampleModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleHtml} from '!!raw-loader!./examples/import/insert-template.txt';

import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tui-pagination',
    templateUrl: './pagination.template.html',
    changeDetection,
})
export class ExampleTuiPaginationComponent {
    readonly exampleModule = exampleModule;
    readonly exampleHtml = exampleHtml;

    readonly example1: TuiDocExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
        LESS: import('!!raw-loader!./examples/1/index.less'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
        LESS: import('!!raw-loader!./examples/1/index.less'),
    };

    readonly example3: TuiDocExample = {
        TypeScript: example3Ts,
        HTML: example3Html,
        LESS: import('!!raw-loader!./examples/1/index.less'),
    };

    readonly example4: FrontEndExample = {
        TypeScript: example4Ts,
        HTML: example4Html,
    };

    focusable = true;
    index = 0;
    length = 8;
    readonly sizeVariants: readonly TuiSizeS[] = ['s', 'm'];
    size: TuiSizeS = this.sizeVariants[1];
    activePadding = 1;
    sidePadding = 1;
}
