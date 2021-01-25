import example1Html from '!!raw-loader!./examples/1/index.html';
import example1Scss from '!!raw-loader!./examples/1/index.style.scss';
import example1Ts from '!!raw-loader!./examples/1/index.ts';
import example2Html from '!!raw-loader!./examples/2/index.html';
import example2Scss from '!!raw-loader!./examples/2/index.style.scss';
import example2Ts from '!!raw-loader!./examples/2/index.ts';
import example3Html from '!!raw-loader!./examples/3/index.html';
import example3Ts from '!!raw-loader!./examples/3/index.ts';
import example4Html from '!!raw-loader!./examples/4/index.html';
import example4Ts from '!!raw-loader!./examples/4/index.ts';
import exampleImportModule from '!!raw-loader!./examples/import/import-module.txt';
import exampleInsertTemplate from '!!raw-loader!./examples/import/insert-template.txt';
import {Component} from '@angular/core';
import {TuiOrientation, TuiSizeL} from '@taiga-ui/core';

import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-group',
    templateUrl: './group.template.html',
    styleUrls: ['./group.style.scss'],
    changeDetection,
})
export class ExampleTuiGroupComponent {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

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

    readonly example3: FrontEndExample = {
        TypeScript: example3Ts,
        HTML: example3Html,
    };

    readonly example4: FrontEndExample = {
        TypeScript: example4Ts,
        HTML: example4Html,
    };

    adaptive = false;
    rounded = true;
    collapsed = false;

    readonly orientationVariants: ReadonlyArray<TuiOrientation> = [
        TuiOrientation.Horizontal,
        TuiOrientation.Vertical,
    ];

    orientation: TuiOrientation = this.orientationVariants[0];

    readonly sizeVariants: ReadonlyArray<TuiSizeL> = ['m', 'l'];

    size: TuiSizeL = this.sizeVariants[0];
}
