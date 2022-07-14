import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiLabelModule,
    TuiLinkModule,
    TuiNotificationModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiInputCountModule} from '@taiga-ui/kit';

import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiInputCountExample1} from './examples/1';
import {TuiInputCountExample2} from './examples/2';
import {TuiInputCountExample3} from './examples/3';
import {ExampleTuiInputCountComponent} from './input-count.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiInputCountModule,
        TuiLabelModule,
        TuiLinkModule,
        TuiAddonDocModule,
        TuiTextfieldControllerModule,
        TuiNotificationModule,
        InheritedDocumentationModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiInputCountComponent)),
    ],
    declarations: [
        ExampleTuiInputCountComponent,
        TuiInputCountExample1,
        TuiInputCountExample2,
        TuiInputCountExample3,
    ],
    exports: [ExampleTuiInputCountComponent],
})
export class ExampleTuiInputCountModule {}
