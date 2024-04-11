import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiSvgComponent} from '@taiga-ui/core';

import {TuiStepComponent} from './step/step.component';
import {TuiStepperComponent} from './stepper.component';

@NgModule({
    imports: [CommonModule, TuiSvgComponent],
    declarations: [TuiStepperComponent, TuiStepComponent],
    exports: [TuiStepperComponent, TuiStepComponent],
})
export class TuiStepperModule {}
