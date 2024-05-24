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
import {TuiInputMonthRangeModule} from '@taiga-ui/legacy';

import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiInputMonthRangeExample1} from './examples/1';
import {TuiInputMonthRangeExample2} from './examples/2';
import {TuiInputMonthRangeExample3} from './examples/3';
import {ExampleTuiInputMonthRangeComponent} from './input-month-range.component';

@NgModule({
    imports: [
        TuiAddonDoc,
        InheritedDocumentationModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        TuiLinkDirective,
        TuiButtonDirective,
        TuiInputMonthRangeModule,
        TuiTextfieldControllerModule,
        TuiHint,
        TuiNotificationComponent,
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
