import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiPanModule} from '@taiga-ui/cdk';

import {TuiPanExample1} from './examples/1';
import {ExampleTuiPanComponent} from './pan.component';

@NgModule({
    imports: [
        CommonModule,
        TuiPanModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiPanComponent)),
    ],
    declarations: [ExampleTuiPanComponent, TuiPanExample1],
    exports: [ExampleTuiPanComponent],
})
export class ExampleTuiPanModule {}
