import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Less} from '!!raw-loader!./examples/1/index.less';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';

import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Less} from '!!raw-loader!./examples/2/index.less';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';

import {default as example3Html} from '!!raw-loader!./examples/3/index.html';
import {default as example3Less} from '!!raw-loader!./examples/3/index.less';
import {default as example3Ts} from '!!raw-loader!./examples/3/index.ts';

import {Component} from '@angular/core';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tui-progress-bar',
    templateUrl: './progress-bar.component.html',
    changeDetection,
})
export class ExampleProgressBarComponent {
    readonly basicExample: FrontEndExample = {
        HTML: example1Html,
        TypeScript: example1Ts,
        LESS: example1Less,
    };

    readonly multiColorExample: FrontEndExample = {
        HTML: example2Html,
        TypeScript: example2Ts,
        LESS: example2Less,
    };

    readonly sizesExample: FrontEndExample = {
        HTML: example3Html,
        TypeScript: example3Ts,
        LESS: example3Less,
    };
}
