import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiMobileCalendarDialogModule} from '@taiga-ui/addon-mobile';
import {
    TuiButtonModule,
    TuiHintControllerModule,
    TuiLinkModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiInputDateRangeModule, TuiUnfinishedValidatorModule} from '@taiga-ui/kit';
import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiInputDateRangeExample1} from './examples/1/component';
import {TuiInputDateRangeExample2} from './examples/2/component';
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
        TuiHintControllerModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ExampleTuiInputDateRangeComponent)),
        TuiUnfinishedValidatorModule,
    ],
    declarations: [
        ExampleTuiInputDateRangeComponent,
        TuiInputDateRangeExample1,
        TuiInputDateRangeExample2,
    ],
    exports: [ExampleTuiInputDateRangeComponent],
})
export class ExampleTuiInputDateRangeModule {}
