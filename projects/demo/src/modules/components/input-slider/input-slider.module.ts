import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {
    TuiButtonModule,
    TuiHintControllerModule,
    TuiLinkModule,
    TuiNotificationModule,
    TuiSvgModule,
} from '@taiga-ui/core';
import {
    TuiInputRangeModule,
    TuiInputSliderModule,
    TuiRadioListModule,
} from '@taiga-ui/kit';

import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiInputSliderExample1} from './examples/1';
import {TuiInputSliderExample2} from './examples/2';
import {TuiInputSliderExample3} from './examples/3';
import {ExampleTuiInputSliderComponent} from './input-slider.component';

@NgModule({
    imports: [
        TuiInputRangeModule,
        TuiInputSliderModule,
        InheritedDocumentationModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        TuiRadioListModule,
        TuiButtonModule,
        TuiHintControllerModule,
        TuiAddonDocModule,
        TuiLinkModule,
        TuiSvgModule,
        TuiNotificationModule,
        RouterModule.forChild(generateRoutes(ExampleTuiInputSliderComponent)),
    ],
    declarations: [
        ExampleTuiInputSliderComponent,
        TuiInputSliderExample1,
        TuiInputSliderExample2,
        TuiInputSliderExample3,
    ],
    exports: [ExampleTuiInputSliderComponent],
})
export class ExampleTuiInputSliderModule {}
