import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiNotificationModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiInputYearModule} from '@taiga-ui/kit';

import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {InputYearExample1} from './examples/1';
import {InputYearExample2} from './examples/2';
import {ExampleInputYearComponent} from './input-year.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TuiAddonDocModule,
        InheritedDocumentationModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleInputYearComponent)),
        TuiInputYearModule,
        TuiTextfieldControllerModule,
        TuiNotificationModule,
    ],
    declarations: [ExampleInputYearComponent, InputYearExample1, InputYearExample2],
    exports: [ExampleInputYearComponent],
})
export class ExampleInputYearModule {}
