import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiMoneyModule} from '@taiga-ui/addon-commerce';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiFilterPipeModule} from '@taiga-ui/cdk';

import {TuiFilterExample1} from './examples/1/component';
import {ExampleTuiFilterComponent} from './filter.component';

@NgModule({
    imports: [
        TuiFilterPipeModule,
        TuiMoneyModule,
        CommonModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiFilterComponent)),
    ],
    declarations: [ExampleTuiFilterComponent, TuiFilterExample1],
    exports: [ExampleTuiFilterComponent],
})
export class ExampleTuiFilterModule {}
