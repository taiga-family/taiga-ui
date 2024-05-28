import {NgModule} from '@angular/core';

import {TuiStepComponent} from './step.component';
import {TuiStepperComponent} from './stepper.component';

@NgModule({
    imports: [TuiStepperComponent, TuiStepComponent],
    exports: [TuiStepperComponent, TuiStepComponent],
})
export class TuiStepper {}
