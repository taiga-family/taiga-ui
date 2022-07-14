import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiBarModule} from '@taiga-ui/addon-charts';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';

import {ExampleTuiBarComponent} from './bar.component';
import {TuiBarExample1} from './examples/1';
import {TuiBarExample2} from './examples/2';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TuiBarModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiBarComponent)),
    ],
    declarations: [ExampleTuiBarComponent, TuiBarExample1, TuiBarExample2],
    exports: [ExampleTuiBarComponent],
})
export class ExampleTuiBarModule {}
