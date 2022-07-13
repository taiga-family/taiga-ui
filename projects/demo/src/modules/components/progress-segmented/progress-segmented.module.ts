import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiMoneyModule} from '@taiga-ui/addon-commerce';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLabelModule} from '@taiga-ui/core';
import {TuiProgressModule} from '@taiga-ui/kit';

import {TuiProgressSegmentedExample1} from './examples/1';
import {TuiProgressSegmentedExample2} from './examples/2';
import {TuiProgressSegmentedExample3} from './examples/3';
import {TuiProgressSegmentedExample4} from './examples/4';
import {ExampleProgressSegmentedComponent} from './progress-segmented.component';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        TuiProgressModule,
        TuiLabelModule,
        TuiMoneyModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleProgressSegmentedComponent)),
    ],
    declarations: [
        ExampleProgressSegmentedComponent,
        TuiProgressSegmentedExample1,
        TuiProgressSegmentedExample2,
        TuiProgressSegmentedExample3,
        TuiProgressSegmentedExample4,
    ],
})
export class ExampleTuiProgressSegmentedModule {}
