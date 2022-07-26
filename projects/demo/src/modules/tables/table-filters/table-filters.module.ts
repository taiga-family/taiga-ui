import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiTableFiltersModule, TuiTableModule} from '@taiga-ui/addon-table';
import {TuiFormatNumberPipeModule} from '@taiga-ui/core';
import {TuiInputNumberModule, TuiToggleModule} from '@taiga-ui/kit';

import {TuiTableFiltersExample1} from './examples/1';
import {ExampleTuiTableFiltersComponent} from './table-filters.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiFormatNumberPipeModule,
        TuiInputNumberModule,
        TuiToggleModule,
        TuiTableModule,
        TuiTableFiltersModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ExampleTuiTableFiltersComponent)),
    ],
    declarations: [ExampleTuiTableFiltersComponent, TuiTableFiltersExample1],
    exports: [ExampleTuiTableFiltersComponent],
})
export class ExampleTuiTableFiltersModule {}
