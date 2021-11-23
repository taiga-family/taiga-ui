import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiTextfieldControllerModule} from '@taiga-ui/core';
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
        RouterModule.forChild(generateRoutes(ExampleInputMonthComponent)),
        TuiInputMonthModule,
        TuiTextfieldControllerModule,
    ],
    declarations: [ExampleInputMonthComponent, InputMonthExample1, InputMonthExample2],
    exports: [ExampleInputMonthComponent],
})
export class ExampleInputMonthModule {}
