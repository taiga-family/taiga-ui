import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiBarSetModule} from '@taiga-ui/addon-charts';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';

import {ExampleTuiBarSetComponent} from './bar-set.component';
import {TuiBarSetExample1} from './examples/1';
import {TuiBarSetExample2} from './examples/2';
import {TuiBarSetExample3} from './examples/3';
import {TuiBarSetExample4} from './examples/4';
import {TuiBarSetExample5} from './examples/5';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TuiBarSetModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiBarSetComponent)),
    ],
    declarations: [
        ExampleTuiBarSetComponent,
        TuiBarSetExample1,
        TuiBarSetExample2,
        TuiBarSetExample3,
        TuiBarSetExample4,
        TuiBarSetExample5,
    ],
    exports: [ExampleTuiBarSetComponent],
})
export class ExampleTuiBarSetModule {}
