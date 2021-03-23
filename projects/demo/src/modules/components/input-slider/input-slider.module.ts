import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiButtonModule, TuiHintControllerModule} from '@taiga-ui/core';
import {
    TuiInputRangeModule,
    TuiInputSliderModule,
    TuiRadioListModule,
} from '@taiga-ui/kit';
import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiInputSliderExample1} from './examples/1';
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
        RouterModule.forChild(generateRoutes(ExampleTuiInputSliderComponent)),
    ],
    declarations: [ExampleTuiInputSliderComponent, TuiInputSliderExample1],
    exports: [ExampleTuiInputSliderComponent],
})
export class ExampleTuiInputSliderModule {}
