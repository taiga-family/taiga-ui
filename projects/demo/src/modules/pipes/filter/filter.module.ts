import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiFilterPipeModule} from '@taiga-ui/cdk';

import {TuiFilterExample1} from './examples/1/component';
import {ExampleTuiFilterComponent} from './filter.component';

@NgModule({
    imports: [
        TuiFilterPipeModule,
        CommonModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiFilterComponent)),
    ],
    declarations: [ExampleTuiFilterComponent, TuiFilterExample1],
    exports: [ExampleTuiFilterComponent],
})
export class ExampleTuiFilterModule {}
