import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';

import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';

import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {Component} from '@angular/core';
import {TuiOrientationT} from '@taiga-ui/core';
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

    readonly orientationVariants: readonly TuiOrientationT[] = ['horizontal', 'vertical'];

    orientation: TuiOrientationT = this.orientationVariants[0];

    readonly iconVariants = ['', 'tuiIconTimeLarge', 'tuiIconHeart'];

    icon = this.iconVariants[0];

    readonly stateVariants = ['normal', 'pass', 'error'];

    state = this.stateVariants[0];
}
