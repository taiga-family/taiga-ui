import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiButtonDirective,
    TuiHint,
    TuiLinkDirective,
    TuiNotificationComponent,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiInputPasswordModule} from '@taiga-ui/legacy';

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
        TuiLinkDirective,
        InheritedDocumentationModule,
        TuiAddonDoc,
        TuiButtonDirective,
        TuiTextfieldControllerModule,
        TuiHint,
        TuiNotificationComponent,
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
