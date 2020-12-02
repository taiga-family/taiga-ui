import * as example1Html from '!!raw-loader!./examples/1/index.html';
import * as example1Ts from '!!raw-loader!./examples/1/index.ts';

import * as example2Html from '!!raw-loader!./examples/2/index.html';
import * as example2Ts from '!!raw-loader!./examples/2/index.ts';

import * as exampleImportModule from '!!raw-loader!./examples/import/import-module.txt';
import * as exampleInsertTemplate from '!!raw-loader!./examples/import/insert-template.txt';

import {Component} from '@angular/core';
import {TuiOrientation} from '@taiga-ui/core';
import {TuiStepState} from '@taiga-ui/kit';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tui-stepper',
    changeDetection,
    templateUrl: './stepper.template.html',
})
export class ExampleTuiStepperComponent {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
    };

    activeItemIndex = 0;

    readonly orientationVariants: ReadonlyArray<TuiOrientation> = [
        TuiOrientation.Horizontal,
        TuiOrientation.Vertical,
    ];

    orientation: TuiOrientation = this.orientationVariants[0];

    readonly iconVariants = ['', 'tuiIconTimeLarge', 'tuiIconHeart'];

    icon = this.iconVariants[0];

    readonly stateVariants: ReadonlyArray<TuiStepState> = [
        TuiStepState.Normal,
        TuiStepState.Pass,
        TuiStepState.Error,
    ];

    state = this.stateVariants[0];
}
