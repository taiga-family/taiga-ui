import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiButtonModule,
    TuiHintModule,
    TuiLinkModule,
    TuiNotificationModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiInputMonthRangeModule} from '@taiga-ui/kit';

import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiInputMonthRangeExample1} from './examples/1';
import {TuiInputMonthRangeExample2} from './examples/2';
import {TuiInputMonthRangeExample3} from './examples/3';
import {ExampleTuiInputMonthRangeComponent} from './input-month-range.component';

@NgModule({
    imports: [
        TuiAddonDocModule,
        InheritedDocumentationModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        TuiLinkModule,
        TuiButtonModule,
        TuiInputMonthRangeModule,
        TuiTextfieldControllerModule,
        TuiHintModule,
        TuiNotificationModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiInputMonthRangeComponent)),
    ],
    declarations: [
        ExampleTuiInputMonthRangeComponent,
        TuiInputMonthRangeExample1,
        TuiInputMonthRangeExample2,
        TuiInputMonthRangeExample3,
    ],
    exports: [ExampleTuiInputMonthRangeComponent],
})
export class ExampleTuiInputMonthRangeModule {}
