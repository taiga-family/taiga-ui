import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiDataListModule} from '@taiga-ui/core';
import {
    TuiDataListWrapperModule,
    TuiFilterByInputPipeModule,
    TuiInputModule,
} from '@taiga-ui/kit';
import {TuiFilterByInputExample1} from './examples/1';
import {ExampleTuiFilterByInputComponent} from './filter-by-input.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TuiFilterByInputPipeModule,
        TuiAddonDocModule,
        TuiInputModule,
        TuiDataListModule,
        TuiDataListWrapperModule,
        RouterModule.forChild(generateRoutes(ExampleTuiFilterByInputComponent)),
    ],
    declarations: [ExampleTuiFilterByInputComponent, TuiFilterByInputExample1],
    exports: [ExampleTuiFilterByInputComponent],
})
export class ExampleTuiFilterByInputModule {}
