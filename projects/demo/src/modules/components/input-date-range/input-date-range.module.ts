import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiMobileCalendarDialogComponent} from '@taiga-ui/addon-mobile';
import {
    TuiButtonDirective,
    TuiHintModule,
    TuiLinkDirective,
    TuiNotificationModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TUI_MOBILE_CALENDAR,
    TuiInputDateRangeModule,
    TuiUnfinishedValidatorModule,
} from '@taiga-ui/kit';

import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiInputDateRangeExample1} from './examples/1';
import {TuiInputDateRangeExample2} from './examples/2';
import {TuiInputDateRangeExample3} from './examples/3';
import {TuiInputDateRangeExample4} from './examples/4';
import {TuiInputDateRangeExample5} from './examples/5';
import {ExampleTuiInputDateRangeComponent} from './input-date-range.component';

@NgModule({
    imports: [
        CommonModule,
        TuiInputDateRangeModule,
        ReactiveFormsModule,
        InheritedDocumentationModule,
        TuiButtonDirective,
        TuiLinkDirective,
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
        TuiInputDateRangeExample5,
    ],
    providers: [
        {
            provide: TUI_MOBILE_CALENDAR,
            useValue: TuiMobileCalendarDialogComponent,
        },
    ],
    exports: [ExampleTuiInputDateRangeComponent],
})
export class ExampleTuiInputDateRangeModule {}
