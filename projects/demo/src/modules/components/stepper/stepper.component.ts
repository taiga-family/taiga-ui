import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiOrientationT} from '@taiga-ui/core';
import {TuiStepState} from '@taiga-ui/kit';

@Component({
    selector: 'example-tui-stepper',
    changeDetection,
    templateUrl: './stepper.template.html',
})
export class ExampleTuiStepperComponent {
    readonly exampleModule = import('!!raw-loader!./examples/import/import-module.md');
    readonly exampleHtml = import('!!raw-loader!./examples/import/insert-template.md');

    readonly example1: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
        HTML: import('!!raw-loader!./examples/1/index.html'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/2/index.ts'),
        HTML: import('!!raw-loader!./examples/2/index.html'),
    };

    activeItemIndex = 0;

    readonly orientationVariants: readonly TuiOrientationT[] = ['horizontal', 'vertical'];

    orientation: TuiOrientationT = this.orientationVariants[0];

    readonly iconVariants = ['', 'tuiIconTimeLarge', 'tuiIconHeart'];

    icon = this.iconVariants[0];

    readonly stateVariants: TuiStepState[] = ['normal', 'pass', 'error'];

    state: TuiStepState = this.stateVariants[0];
}
