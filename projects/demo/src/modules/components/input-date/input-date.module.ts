import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiMobileCalendarDialogModule} from '@taiga-ui/addon-mobile';
import {
    TuiButtonModule,
    TuiErrorModule,
    TuiHintModule,
    TuiLinkModule,
    TuiNotificationModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiFieldErrorPipeModule,
    TuiInputDateModule,
    TuiRadioListModule,
    TuiUnfinishedValidatorModule,
} from '@taiga-ui/kit';

import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiInputDateExample1} from './examples/1';
import {TuiInputDateExample2} from './examples/2';
import {TuiInputDateExample3} from './examples/3';
import {TuiInputDateExample4} from './examples/4';
import {TuiInputDateExample5} from './examples/5';
import {ExampleNativeDateTransformerDirective} from './examples/5/native-date-transformer.directive';
import {ExampleTuiInputDateComponent} from './input-date.component';

@NgModule({
    imports: [
        TuiAddonDocModule,
        InheritedDocumentationModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        TuiLinkModule,
        TuiRadioListModule,
        TuiButtonModule,
        TuiInputDateModule,
        TuiMobileCalendarDialogModule,
        TuiUnfinishedValidatorModule,
        TuiTextfieldControllerModule,
        TuiHintModule,
        TuiErrorModule,
        TuiFieldErrorPipeModule,
        TuiNotificationModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiInputDateComponent)),
    ],
    declarations: [
        ExampleTuiInputDateComponent,
        TuiInputDateExample1,
        TuiInputDateExample2,
        TuiInputDateExample3,
        TuiInputDateExample4,
        TuiInputDateExample5,
        ExampleNativeDateTransformerDirective,
    ],
    exports: [ExampleTuiInputDateComponent],
})
export class ExampleTuiInputDateModule {}
