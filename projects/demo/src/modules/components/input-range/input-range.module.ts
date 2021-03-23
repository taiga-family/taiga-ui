import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiButtonModule} from '@taiga-ui/core';
import {
    TuiInputRangeModule,
    TuiInputSliderModule,
    TuiRadioListModule,
} from '@taiga-ui/kit';
import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiInputRangeExample1} from './examples/1';
import {ExampleTuiInputRangeComponent} from './input-range.component';

@NgModule({
    imports: [
        TuiInputRangeModule,
        TuiInputSliderModule,
        InheritedDocumentationModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        TuiRadioListModule,
        TuiAddonDocModule,
        TuiButtonModule,
        RouterModule.forChild(generateRoutes(ExampleTuiInputRangeComponent)),
    ],
    declarations: [ExampleTuiInputRangeComponent, TuiInputRangeExample1],
    exports: [ExampleTuiInputRangeComponent],
})
export class ExampleTuiInputRangeModule {}
