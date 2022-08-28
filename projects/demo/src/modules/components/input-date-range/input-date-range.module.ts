import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiMobileCalendarDialogModule} from '@taiga-ui/addon-mobile';
import {
    TuiButtonModule,
    TuiHintModule,
    TuiLinkModule,
    TuiNotificationModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiInputDateRangeModule, TuiUnfinishedValidatorModule} from '@taiga-ui/kit';

import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiInputDateRangeExample1} from './examples/1';
import {TuiInputDateRangeExample2} from './examples/2';
import {TuiInputDateRangeExample3} from './examples/3';
import {TuiInputDateRangeExample4} from './examples/4';
import {ExampleTuiInputDateRangeComponent} from './input-date-range.component';

@NgModule({
    imports: [
        CommonModule,
        TuiInputDateRangeModule,
        ReactiveFormsModule,
        InheritedDocumentationModule,
        TuiButtonModule,
        TuiLinkModule,
        TuiMobileCalendarDialogModule,
        TuiTextfieldControllerModule,
        TuiHintModule,
        TuiNotificationModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiInputDateRangeComponent)),
        TuiUnfinishedValidatorModule,
    ],
    declarations: [
        ExampleTuiInputDateRangeComponent,
        TuiInputDateRangeExample1,
        TuiInputDateRangeExample2,
        TuiInputDateRangeExample3,
        TuiInputDateRangeExample4,
    ],
    exports: [ExampleTuiInputDateRangeComponent],
})
export class ExampleTuiInputDateRangeModule {}
