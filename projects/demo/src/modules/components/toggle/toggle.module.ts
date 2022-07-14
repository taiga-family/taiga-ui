import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiToggleModule} from '@taiga-ui/kit';

import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiToggleExample1} from './examples/1';
import {TuiToggleExample2} from './examples/2';
import {ExampleTuiToggleComponent} from './toggle.component';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        TuiToggleModule,
        TuiAddonDocModule,
        InheritedDocumentationModule,
        CommonModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiToggleComponent)),
    ],
    declarations: [ExampleTuiToggleComponent, TuiToggleExample1, TuiToggleExample2],
    exports: [ExampleTuiToggleComponent],
})
export class ExampleTuiToggleModule {}
