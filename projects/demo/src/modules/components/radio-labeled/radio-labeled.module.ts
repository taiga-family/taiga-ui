import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {TuiRadioLabeledModule} from '@taiga-ui/kit';

import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiRadioLabeledExample1} from './examples/1';
import {TuiRadioLabeledExample2} from './examples/2';
import {TuiRadioLabeledExample3} from './examples/3';
import {ExampleTuiRadioLabeledComponent} from './radio-labeled.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        TuiRadioLabeledModule,
        TuiLinkModule,
        InheritedDocumentationModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiRadioLabeledComponent)),
    ],
    declarations: [
        ExampleTuiRadioLabeledComponent,
        TuiRadioLabeledExample1,
        TuiRadioLabeledExample2,
        TuiRadioLabeledExample3,
    ],
    exports: [ExampleTuiRadioLabeledComponent],
})
export class ExampleTuiRadioLabeledModule {}
