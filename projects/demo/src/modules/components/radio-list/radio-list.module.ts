import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiButtonModule} from '@taiga-ui/core';
import {TuiRadioListModule} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiRadioListExample1} from './examples/1';
import {TuiRadioListExample2} from './examples/2';
import {ExampleTuiRadioListComponent} from './radio-list.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiRadioListModule,
        ReactiveFormsModule,
        TuiButtonModule,
        InheritedDocumentationModule,
        PolymorpheusModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiRadioListComponent)),
    ],
    declarations: [
        ExampleTuiRadioListComponent,
        TuiRadioListExample1,
        TuiRadioListExample2,
    ],
    exports: [ExampleTuiRadioListComponent],
})
export class ExampleTuiRadioListModule {}
