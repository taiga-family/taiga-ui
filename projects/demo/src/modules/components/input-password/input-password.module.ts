import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiButtonModule,
    TuiHintControllerModule,
    TuiLinkModule,
    TuiNotificationModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiInputPasswordModule} from '@taiga-ui/kit';

import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiInputPasswordExample1} from './examples/1';
import {TuiInputPasswordExample2} from './examples/2';
import {ExampleTuiInputPasswordComponent} from './input-password.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiInputPasswordModule,
        TuiLinkModule,
        InheritedDocumentationModule,
        TuiAddonDocModule,
        TuiButtonModule,
        TuiTextfieldControllerModule,
        TuiHintControllerModule,
        TuiNotificationModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiInputPasswordComponent)),
    ],
    declarations: [
        ExampleTuiInputPasswordComponent,
        TuiInputPasswordExample1,
        TuiInputPasswordExample2,
    ],
    exports: [ExampleTuiInputPasswordComponent],
})
export class ExampleTuiInputPasswordModule {}
