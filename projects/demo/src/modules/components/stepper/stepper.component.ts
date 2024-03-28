import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    TuiComponentPipe,
    TuiExamplePipe,
    TuiKebabPipe,
    TuiSetupComponent,
} from '@demo/utils';
import {TuiAddonDocModule} from '@taiga-ui/addon-doc';
import type {TuiOrientation} from '@taiga-ui/core';
import type {TuiStepState} from '@taiga-ui/kit';
import {TuiStepperModule} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiStepperModule,
        TuiAddonDocModule,
        TuiComponentPipe,
        TuiExamplePipe,
        TuiKebabPipe,
        NgForOf,
        TuiSetupComponent,
    ],
    templateUrl: './stepper.template.html',
    changeDetection,
})
export default class ExampleComponent {
    protected activeItemIndex = 0;

    protected readonly examples = ['Basic', 'Vertical', 'Vertical autoscroll'];

    protected readonly orientationVariants: readonly TuiOrientation[] = [
        'horizontal',
        'vertical',
    ];

    protected orientation: TuiOrientation = this.orientationVariants[0];

    protected readonly iconVariants = ['', 'tuiIconClockLarge', 'tuiIconHeart'];

    protected icon = this.iconVariants[0];

    protected readonly stateVariants: TuiStepState[] = ['normal', 'pass', 'error'];

    protected state: TuiStepState = this.stateVariants[0];
}
