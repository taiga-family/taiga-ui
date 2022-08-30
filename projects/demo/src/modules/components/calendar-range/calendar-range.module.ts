import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiCalendarRangeModule} from '@taiga-ui/kit';

import {ExampleTuiCalendarRangeComponent} from './calendar-range.component';
import {TuiRangeExample1} from './examples/1';
import {TuiRangeExample2} from './examples/2';
import {TuiRangeExample3} from './examples/3';

@NgModule({
    imports: [
        TuiCalendarRangeModule,
        CommonModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiCalendarRangeComponent)),
    ],
    declarations: [
        ExampleTuiCalendarRangeComponent,
        TuiRangeExample1,
        TuiRangeExample2,
        TuiRangeExample3,
    ],
    exports: [ExampleTuiCalendarRangeComponent],
})
export class ExampleTuiCalendarRangeModule {}
