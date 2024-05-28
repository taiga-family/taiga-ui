import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiNotificationComponent, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiInputYearModule} from '@taiga-ui/legacy';

import {InheritedDocumentationComponent} from '../abstract/inherited-documentation';
import {InputYearExample1} from './examples/1';
import {InputYearExample2} from './examples/2';
import {ExampleInputYearComponent} from './input-year.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TuiAddonDoc,
        InheritedDocumentationComponent,
        RouterModule.forChild(tuiGenerateRoutes(ExampleInputYearComponent)),
        TuiInputYearModule,
        TuiTextfieldControllerModule,
        TuiNotificationComponent,
    ],
    declarations: [ExampleInputYearComponent, InputYearExample1, InputYearExample2],
    exports: [ExampleInputYearComponent],
})
export class ExampleInputYearModule {}
