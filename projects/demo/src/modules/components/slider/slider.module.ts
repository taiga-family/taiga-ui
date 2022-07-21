import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiButtonModule,
    TuiLinkModule,
    TuiModeModule,
    TuiNotificationModule,
} from '@taiga-ui/core';
import {TuiSliderModule} from '@taiga-ui/kit';

import {TuiSliderExample1} from './examples/1';
import {TuiSliderExample2} from './examples/2';
import {TuiSliderExample3} from './examples/3';
import {TuiSliderExample4} from './examples/4';
import {TuiSliderExample5} from './examples/5';
import {TuiSliderExample6} from './examples/6';
import {ExampleTuiSliderComponent} from './slider.component';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        TuiSliderModule,
        FormsModule,
        ReactiveFormsModule,
        TuiLinkModule,
        TuiNotificationModule,
        TuiModeModule,
        TuiButtonModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiSliderComponent)),
    ],
    declarations: [
        ExampleTuiSliderComponent,
        TuiSliderExample1,
        TuiSliderExample2,
        TuiSliderExample3,
        TuiSliderExample4,
        TuiSliderExample5,
        TuiSliderExample6,
    ],
})
export class ExampleTuiSliderModule {}
