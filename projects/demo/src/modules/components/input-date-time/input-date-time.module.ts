import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiDropdownModule,
    TuiHintModule,
    TuiLinkModule,
    TuiNotificationModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiInputDateTimeModule} from '@taiga-ui/kit';

import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiInputDateTimeExample1} from './examples/1';
import {TuiInputDateTimeExample2} from './examples/2';
import {TuiInputDateTimeExample3} from './examples/3';
import {TuiInputDateTimeExample4} from './examples/4';
import {TuiInputDateTimeExample5} from './examples/5';
import {ExampleTuiInputDateTimeComponent} from './input-date-time.component';

@NgModule({
    imports: [
        TuiAddonDocModule,
        InheritedDocumentationModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        TuiLinkModule,
        TuiInputDateTimeModule,
        TuiHintModule,
        TuiTextfieldControllerModule,
        TuiNotificationModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiInputDateTimeComponent)),
        TuiDropdownModule,
    ],
    declarations: [
        ExampleTuiInputDateTimeComponent,
        TuiInputDateTimeExample1,
        TuiInputDateTimeExample2,
        TuiInputDateTimeExample3,
        TuiInputDateTimeExample4,
        TuiInputDateTimeExample5,
    ],
    exports: [ExampleTuiInputDateTimeComponent],
})
export class ExampleTuiInputDateTimeModule {}
