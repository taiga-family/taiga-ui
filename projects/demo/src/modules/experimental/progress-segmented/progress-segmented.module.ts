import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {
    TuiAddonDocModule,
    tuiGenerateRoutes,
    TuiTextCodeModule,
} from '@taiga-ui/addon-doc';
import {TuiLabelModule, TuiLinkModule} from '@taiga-ui/core';
import {TuiProgressSegmentedModule} from '@taiga-ui/experimental';
import {TuiProgressModule} from '@taiga-ui/kit';

import {TuiProgressSegmentedExample1} from './examples/1';
import {TuiProgressSegmentedExample2} from './examples/2';
import {TuiProgressSegmentedExample3} from './examples/3';
import {TuiProgressSegmentedExample4} from './examples/4';
import {TuiProgressSegmentedExample5} from './examples/5';
import {ExampleProgressSegmentedComponent} from './progress-segmented.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleProgressSegmentedComponent)),
        TuiAddonDocModule,
        TuiLabelModule,
        TuiLinkModule,
        TuiAmountPipe,
        TuiProgressModule,
        TuiProgressSegmentedModule,
        TuiTextCodeModule,
    ],
    declarations: [
        ExampleProgressSegmentedComponent,
        TuiProgressSegmentedExample1,
        TuiProgressSegmentedExample2,
        TuiProgressSegmentedExample3,
        TuiProgressSegmentedExample4,
        TuiProgressSegmentedExample5,
    ],
})
export class ExampleTuiProgressSegmentedModule {}
