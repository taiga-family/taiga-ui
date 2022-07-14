import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {TuiCheckboxLabeledModule} from '@taiga-ui/kit';
import {MarkdownModule} from 'ngx-markdown';

import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {ExampleTuiCheckboxLabeledComponent} from './checkbox-labeled.component';
import {TuiCheckboxLabeledExample1} from './examples/1';
import {TuiCheckboxLabeledExample2} from './examples/2';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        MarkdownModule,
        TuiCheckboxLabeledModule,
        TuiLinkModule,
        TuiAddonDocModule,
        InheritedDocumentationModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiCheckboxLabeledComponent)),
    ],
    declarations: [
        ExampleTuiCheckboxLabeledComponent,
        TuiCheckboxLabeledExample1,
        TuiCheckboxLabeledExample2,
    ],
    exports: [ExampleTuiCheckboxLabeledComponent],
})
export class ExampleTuiCheckboxLabeledModule {}
