import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiButtonModule, TuiLinkModule} from '@taiga-ui/core';
import {TuiCalendarRangeModule} from '@taiga-ui/kit';

import {ExampleTuiCalendarRangeComponent} from './calendar-range.component';
import {TuiCalendarRangeExample1} from './examples/1';
import {TuiCalendarRangeExample2} from './examples/2';
import {TuiCalendarRangeExample3} from './examples/3';
import {TuiCalendarRangeExample4} from './examples/4';
import {TuiCalendarRangeExample5} from './examples/5';

@NgModule({
    imports: [
        TuiCalendarRangeModule,
        CommonModule,
        TuiAddonDocModule,
        TuiLinkModule,
        TuiButtonModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiCalendarRangeComponent)),
    ],
    declarations: [
        ExampleTuiCalendarRangeComponent,
        TuiCalendarRangeExample1,
        TuiCalendarRangeExample2,
        TuiCalendarRangeExample3,
        TuiCalendarRangeExample4,
        TuiCalendarRangeExample5,
    ],
    exports: [ExampleTuiCalendarRangeComponent],
})
export class ExampleTuiCalendarRangeModule {}
