import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {TuiCheckboxModule} from '@taiga-ui/kit';
import {MarkdownModule} from 'ngx-markdown';

import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {ExampleTuiCheckboxComponent} from './checkbox.component';
import {TuiCheckboxExample1} from './examples/1';
import {TuiCheckboxExample2} from './examples/2';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        TuiCheckboxModule,
        TuiLinkModule,
        MarkdownModule,
        TuiAddonDocModule,
        InheritedDocumentationModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiCheckboxComponent)),
    ],
    declarations: [ExampleTuiCheckboxComponent, TuiCheckboxExample1, TuiCheckboxExample2],
    exports: [ExampleTuiCheckboxComponent],
})
export class ExampleTuiCheckboxModule {}
