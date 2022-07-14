import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiDataListModule} from '@taiga-ui/core';
import {
    TuiDataListWrapperModule,
    TuiInputModule,
    TuiInputNumberModule,
    TuiSelectModule,
} from '@taiga-ui/kit';

import {TuiFormatExample1} from './examples/1';
import {TuiFormatExample3} from './examples/3';
import {TuiFormatExample4} from './examples/4';
import {TuiFormatExample5} from './examples/5';
import {TuiFormatExample6} from './examples/6';
import {ExampleFormatComponent} from './format.component';

@NgModule({
    imports: [
        CommonModule,
        TuiInputNumberModule,
        FormsModule,
        ReactiveFormsModule,
        TuiInputModule,
        TuiSelectModule,
        TuiDataListModule,
        TuiDataListWrapperModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleFormatComponent)),
    ],
    declarations: [
        ExampleFormatComponent,
        TuiFormatExample1,
        TuiFormatExample3,
        TuiFormatExample4,
        TuiFormatExample5,
        TuiFormatExample6,
    ],
    exports: [ExampleFormatComponent],
})
export class ExampleFormatModule {}
