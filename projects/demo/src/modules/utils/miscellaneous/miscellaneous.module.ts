import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiDataList, TuiErrorComponent} from '@taiga-ui/core';
import {
    TuiDataListWrapperModule,
    TuiFieldErrorPipeModule,
    TuiInputModule,
    TuiSelectModule,
} from '@taiga-ui/kit';

import {TuiMiscellaneousExample1} from './examples/1';
import {TuiMiscellaneousExample2} from './examples/2';
import {TuiMiscellaneousExample4} from './examples/4';
import {TuiMiscellaneousExample5} from './examples/5';
import {TuiMiscellaneousExample6} from './examples/6';
import {ExampleMiscellaneousComponent} from './miscellaneous.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiSelectModule,
        TuiDataList,
        TuiDataListWrapperModule,
        TuiInputModule,
        TuiErrorComponent,
        TuiFieldErrorPipeModule,
        TuiAddonDoc,
        RouterModule.forChild(tuiGenerateRoutes(ExampleMiscellaneousComponent)),
    ],
    declarations: [
        ExampleMiscellaneousComponent,
        TuiMiscellaneousExample1,
        TuiMiscellaneousExample2,
        TuiMiscellaneousExample4,
        TuiMiscellaneousExample5,
        TuiMiscellaneousExample6,
    ],
    exports: [ExampleMiscellaneousComponent],
})
export class ExampleMiscellaneousModule {}
