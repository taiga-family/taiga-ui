import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiNotificationModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiInputMonthModule} from '@taiga-ui/kit';

import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {InputMonthExample1} from './examples/1';
import {InputMonthExample2} from './examples/2';
import {ExampleInputMonthComponent} from './input-month.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TuiAddonDocModule,
        InheritedDocumentationModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleInputMonthComponent)),
        TuiInputMonthModule,
        TuiTextfieldControllerModule,
        TuiNotificationModule,
    ],
    declarations: [ExampleInputMonthComponent, InputMonthExample1, InputMonthExample2],
    exports: [ExampleInputMonthComponent],
})
export class ExampleInputMonthModule {}
