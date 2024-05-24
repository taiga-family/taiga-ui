import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiSetupComponent} from '@demo/utils';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiTextfieldControllerModule} from '@taiga-ui/core';
import {
    TuiDataListWrapperModule,
    TuiFilterByInputPipeModule,
    TuiStringifyContentPipeModule,
} from '@taiga-ui/kit';
import {TuiComboBoxModule, TuiInputModule} from '@taiga-ui/legacy';

import {ExampleTuiDataListWrapperComponent} from './data-list-wrapper.component';
import {TuiDataListWrapperExample1} from './examples/1';
import {TuiDataListWrapperExample2} from './examples/2';
import {TuiDataListWrapperExample3} from './examples/3';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiDataListWrapperComponent)),
        TuiAddonDoc,
        TuiComboBoxModule,
        TuiDataListWrapperModule,
        TuiFilterByInputPipeModule,
        TuiInputModule,
        TuiStringifyContentPipeModule,
        TuiTextfieldControllerModule,
        TuiSetupComponent,
    ],
    declarations: [
        ExampleTuiDataListWrapperComponent,
        TuiDataListWrapperExample1,
        TuiDataListWrapperExample2,
        TuiDataListWrapperExample3,
    ],
    exports: [ExampleTuiDataListWrapperComponent],
})
export class ExampleTuiDataListWrapperModule {}
