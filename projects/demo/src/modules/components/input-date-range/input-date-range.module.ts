import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {tuiProvideMobileCalendar} from '@taiga-ui/addon-mobile';
import {
    TuiButtonDirective,
    TuiHint,
    TuiLinkDirective,
    TuiNotificationComponent,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiUnfinishedValidatorDirective} from '@taiga-ui/kit';
import {TuiInputDateRangeModule} from '@taiga-ui/legacy';

import {InheritedDocumentationComponent} from '../abstract/inherited-documentation';
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
        InheritedDocumentationComponent,
        TuiButtonDirective,
        TuiLinkDirective,
        TuiTextfieldControllerModule,
        TuiHint,
        TuiNotificationComponent,
        TuiAddonDoc,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiInputDateRangeComponent)),
        TuiUnfinishedValidatorDirective,
    ],
    declarations: [
        ExampleTuiInputDateRangeComponent,
        TuiInputDateRangeExample1,
        TuiInputDateRangeExample2,
        TuiInputDateRangeExample3,
        TuiInputDateRangeExample4,
        TuiInputDateRangeExample5,
    ],
    providers: [tuiProvideMobileCalendar()],
    exports: [ExampleTuiInputDateRangeComponent],
})
export class ExampleTuiInputDateRangeModule {}
