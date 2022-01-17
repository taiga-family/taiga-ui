import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule, TuiNotificationModule} from '@taiga-ui/core';
import {TuiRadioListModule, TuiSliderModule} from '@taiga-ui/kit';

import {TuiSliderExample1} from './examples/1';
import {TuiSliderExample2} from './examples/2';
import {ExampleTuiSliderComponent} from './slider-old.component';

@NgModule({
    imports: [
        TuiRadioListModule,
        TuiSliderModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiAddonDocModule,
        TuiLinkModule,
        TuiNotificationModule,
        RouterModule.forChild(generateRoutes(ExampleTuiSliderComponent)),
    ],
    declarations: [ExampleTuiSliderComponent, TuiSliderExample1, TuiSliderExample2],
    exports: [ExampleTuiSliderComponent],
})
export class ExampleTuiSliderOldModule {}
