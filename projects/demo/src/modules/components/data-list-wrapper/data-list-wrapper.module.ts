import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiDataListWrapperModule,
    TuiFilterByInputPipeModule,
    TuiInputModule,
    TuiStringifyContentPipeModule,
} from '@taiga-ui/kit';

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
        TuiAddonDocModule,
        TuiDataListWrapperModule,
        TuiFilterByInputPipeModule,
        TuiInputModule,
        TuiStringifyContentPipeModule,
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
