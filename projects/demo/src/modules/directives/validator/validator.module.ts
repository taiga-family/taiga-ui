import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiSetupComponent} from '@demo/utils';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiValidatorDirective} from '@taiga-ui/cdk';
import {TuiDataList} from '@taiga-ui/core';
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
        TuiValidatorDirective,
        TuiInputPhoneModule,
        TuiDataList,
        TuiDataListWrapperModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiValidatorComponent)),
        TuiSetupComponent,
    ],
    declarations: [ExampleTuiValidatorComponent, TuiValidatorExample1],
    exports: [ExampleTuiValidatorComponent],
})
export class ExampleTuiValidatorModule {}
