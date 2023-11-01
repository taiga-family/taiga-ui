import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample, TuiDocumentationProperty} from '@taiga-ui/addon-doc';
import {TuiOrientation} from '@taiga-ui/core';
import {TuiStepState} from '@taiga-ui/kit';

@Component({
    selector: 'example-tui-stepper',
    templateUrl: './stepper.template.html',
    changeDetection,
})
export class ExampleTuiStepperComponent {
    readonly exampleModule = import('./examples/import/import-module.md?raw');
    readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
    };

    activeItemIndex = 0;

    readonly orientationVariants: readonly TuiOrientation[] = ['horizontal', 'vertical'];

    orientation: TuiOrientation = this.orientationVariants[0];

    readonly iconVariants = ['', 'tuiIconClockLarge', 'tuiIconHeart'];

    icon = this.iconVariants[0];

    readonly stateVariants: TuiStepState[] = ['normal', 'pass', 'error'];

    state: TuiStepState = this.stateVariants[0];

    readonly stepBaseProperties: Record<string, TuiDocumentationProperty> = {
        tuiStep: {
            type: null,
        },
    };
}
