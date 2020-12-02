import * as example1Html from '!!raw-loader!./examples/1/index.html';
import * as example1Less from '!!raw-loader!./examples/1/index.less';
import * as example1Ts from '!!raw-loader!./examples/1/index.ts';

import * as example2Html from '!!raw-loader!./examples/2/index.html';
import * as example2Less from '!!raw-loader!./examples/2/index.less';
import * as example2Ts from '!!raw-loader!./examples/2/index.ts';

import * as example3Html from '!!raw-loader!./examples/3/index.html';
import * as example3Less from '!!raw-loader!./examples/3/index.less';
import * as example3Ts from '!!raw-loader!./examples/3/index.ts';

import * as example4Html from '!!raw-loader!./examples/4/index.html';
import * as example4Less from '!!raw-loader!./examples/4/index.less';
import * as example4Ts from '!!raw-loader!./examples/4/index.ts';

import * as example5Html from '!!raw-loader!./examples/5/index.html';
import * as example5Less from '!!raw-loader!./examples/5/index.less';
import * as example5Ts from '!!raw-loader!./examples/5/index.ts';

import * as importComponentExample from '!!raw-loader!./examples/import/import-component.txt';

import {Component} from '@angular/core';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-format',
    templateUrl: './format.template.html',
    changeDetection,
})
export class ExampleFormatComponent {
    readonly importComponentExample = importComponentExample;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
        LESS: example1Less,
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
        LESS: example4Less,
    };

    readonly example5: FrontEndExample = {
        TypeScript: example5Ts,
        HTML: example5Html,
        LESS: example5Less,
    };
}
