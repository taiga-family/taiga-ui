import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLinkModule, TuiNotificationModule, TuiSvgModule} from '@taiga-ui/core';
import {TuiIslandModule, TuiRadioListModule, TuiRangeModule} from '@taiga-ui/kit';

import {TuiRangeExample1} from './examples/1';
import {TuiRangeExample2} from './examples/2';
import {TuiRangeExample3} from './examples/3';
import {TuiRangeExample4} from './examples/4';
import {ExampleTuiRangeComponent} from './range.component';

@NgModule({
    imports: [
        TuiRadioListModule,
        TuiRangeModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiLinkModule,
        TuiAddonDocModule,
        TuiIslandModule,
        TuiNotificationModule,
        TuiSvgModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiRangeComponent)),
    ],
    declarations: [
        ExampleTuiRangeComponent,
        TuiRangeExample1,
        TuiRangeExample2,
        TuiRangeExample3,
        TuiRangeExample4,
    ],
    exports: [ExampleTuiRangeComponent],
})
export class ExampleTuiRangeModule {}
