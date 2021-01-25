import example1Html from '!!raw-loader!./examples/1/index.html';
import example1Scss from '!!raw-loader!./examples/1/index.style.scss';
import example1Ts from '!!raw-loader!./examples/1/index.ts';
import example2Html from '!!raw-loader!./examples/2/index.html';
import example2Scss from '!!raw-loader!./examples/2/index.style.scss';
import example2Ts from '!!raw-loader!./examples/2/index.ts';
import exampleBasicImportsScss from '!!raw-loader!./examples/import/basic-imports-less.txt';
import exampleIndexScss from '!!raw-loader!./examples/import/index-less.txt';
import {Component} from '@angular/core';

import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'spaces',
    templateUrl: 'spaces.template.html',
    changeDetection,
})
export class SpacesComponent {
    readonly exampleBasicImportsScss = exampleBasicImportsScss;
    readonly exampleIndexScss = exampleIndexScss;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
        SCSS: example1Scss,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
        SCSS: example2Scss,
    };
}
