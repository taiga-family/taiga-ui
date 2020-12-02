import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Less} from '!!raw-loader!./examples/1/index.style.less';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';

import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Less} from '!!raw-loader!./examples/2/index.style.less';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';
import {default as exampleBasicImportsLess} from '!!raw-loader!./examples/import/basic-imports-less.txt';
import {default as exampleIndexLess} from '!!raw-loader!./examples/import/index-less.txt';

import {Component} from '@angular/core';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'spaces',
    templateUrl: 'spaces.template.html',
    changeDetection,
})
export class SpacesComponent {
    readonly exampleBasicImportsLess = exampleBasicImportsLess;
    readonly exampleIndexLess = exampleIndexLess;

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
}
