import {AsyncPipe, NgIf} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiIcon} from '@taiga-ui/core';

import {TuiStep} from './step.component';
import {TuiStepperComponent} from './stepper.component';

@NgModule({
    imports: [NgIf, AsyncPipe, TuiIcon],
    declarations: [TuiStepperComponent, TuiStep],
    exports: [TuiStepperComponent, TuiStep],
})
export class TuiStepper {}
