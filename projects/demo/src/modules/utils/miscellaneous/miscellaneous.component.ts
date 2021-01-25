import example1Html from '!!raw-loader!./examples/1/index.html';
import example1Ts from '!!raw-loader!./examples/1/index.ts';
import example2Html from '!!raw-loader!./examples/2/index.html';
import example2Ts from '!!raw-loader!./examples/2/index.ts';
import example4Html from '!!raw-loader!./examples/4/index.html';
import example4Scss from '!!raw-loader!./examples/4/index.scss';
import example4Ts from '!!raw-loader!./examples/4/index.ts';
import example5Html from '!!raw-loader!./examples/5/index.html';
import example5Scss from '!!raw-loader!./examples/5/index.scss';
import example5Ts from '!!raw-loader!./examples/5/index.ts';
import importComponentExample from '!!raw-loader!./examples/import/import-component.txt';
import {Component} from '@angular/core';

import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-format',
    templateUrl: './miscellaneous.template.html',
    changeDetection,
})
export class ExampleMiscellaneousComponent {
    readonly importComponentExample = importComponentExample;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
    };

    readonly example4: FrontEndExample = {
        TypeScript: example4Ts,
        HTML: example4Html,
        SCSS: example4Scss,
    };

    readonly example5: FrontEndExample = {
        TypeScript: example5Ts,
        HTML: example5Html,
        SCSS: example5Scss,
    };
}
