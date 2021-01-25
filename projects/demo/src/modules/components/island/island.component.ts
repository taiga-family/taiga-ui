import example1Html from '!!raw-loader!./examples/1/index.html';
import example1Scss from '!!raw-loader!./examples/1/index.scss';
import example1Ts from '!!raw-loader!./examples/1/index.ts';
import example2Html from '!!raw-loader!./examples/2/index.html';
import example2Scss from '!!raw-loader!./examples/2/index.scss';
import example2Ts from '!!raw-loader!./examples/2/index.ts';
import example3Html from '!!raw-loader!./examples/3/index.html';
import example3Scss from '!!raw-loader!./examples/3/index.scss';
import example3Ts from '!!raw-loader!./examples/3/index.ts';
import exampleImportModule from '!!raw-loader!./examples/import/import-module.txt';
import exampleInsertTemplate from '!!raw-loader!./examples/import/insert-template.txt';
import {Component} from '@angular/core';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {TuiTextAlign} from '@taiga-ui/kit';

import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-island',
    templateUrl: './island.template.html',
    styleUrls: ['./island.style.scss'],
    changeDetection,
})
export class ExampleTuiIslandComponent {
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
        SCSS: example3Scss,
    };

    hoverable = false;

    readonly textAlignVariants: ReadonlyArray<TuiTextAlign> = [
        TuiTextAlign.Left,
        TuiTextAlign.Center,
    ];

    textAlign: TuiTextAlign = this.textAlignVariants[0];

    readonly sizeVariants: ReadonlyArray<TuiSizeS | TuiSizeL> = ['s', 'm', 'l'];

    size: TuiSizeS | TuiSizeL = this.sizeVariants[0];
}
