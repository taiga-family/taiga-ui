import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiMobileCalendarDialogModule} from '@taiga-ui/addon-mobile';
import {
    TuiButtonModule,
    TuiHintControllerModule,
    TuiLinkModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiFieldErrorModule,
    TuiInputDateModule,
    TuiRadioListModule,
    TuiUnfinishedValidatorModule,
} from '@taiga-ui/kit';
import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiInputDateExample1} from './examples/1';
import {TuiInputDateExample2} from './examples/2';
import {TuiInputDateExample3} from './examples/3';
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
        TuiHintControllerModule,
        TuiFieldErrorModule,
        RouterModule.forChild(generateRoutes(ExampleTuiInputDateComponent)),
    ],
    declarations: [
        ExampleTuiInputDateComponent,
        TuiInputDateExample1,
        TuiInputDateExample2,
        TuiInputDateExample3,
    ],
    exports: [ExampleTuiInputDateComponent],
})
export class ExampleTuiInputDateModule {}
