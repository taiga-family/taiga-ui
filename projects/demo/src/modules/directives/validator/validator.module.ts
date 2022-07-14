import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiValidatorModule} from '@taiga-ui/cdk';
import {TuiDataListModule} from '@taiga-ui/core';
import {
    TuiDataListWrapperModule,
    TuiInputModule,
    TuiInputPhoneModule,
    TuiSelectModule,
} from '@taiga-ui/kit';

import {TuiValidatorExample1} from './examples/1';
import {ExampleTuiValidatorComponent} from './validator.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiInputModule,
        TuiSelectModule,
        TuiValidatorModule,
        TuiInputPhoneModule,
        TuiDataListModule,
        TuiDataListWrapperModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiValidatorComponent)),
    ],
    declarations: [ExampleTuiValidatorComponent, TuiValidatorExample1],
    exports: [ExampleTuiValidatorComponent],
})
export class ExampleTuiValidatorModule {}
