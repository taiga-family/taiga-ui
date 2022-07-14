import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {TuiStepperModule} from '@taiga-ui/kit';

import {TuiStepperExample1} from './examples/1';
import {TuiStepperExample2} from './examples/2';
import {ExampleTuiStepperComponent} from './stepper.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TuiStepperModule,
        TuiLinkModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiStepperComponent)),
    ],
    declarations: [ExampleTuiStepperComponent, TuiStepperExample1, TuiStepperExample2],
    exports: [ExampleTuiStepperComponent],
})
export class ExampleTuiStepperModule {}
