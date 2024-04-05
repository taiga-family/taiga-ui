import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLinkDirective} from '@taiga-ui/core';
import {TuiCalendarMonthModule} from '@taiga-ui/kit';

import {ExampleTuiCalendarMonthComponent} from './calendar-month.component';
import {TuiMonthExample1} from './examples/1';
import {TuiMonthExample2} from './examples/2';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TuiLinkDirective,
        TuiCalendarMonthModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiCalendarMonthComponent)),
    ],
    declarations: [ExampleTuiCalendarMonthComponent, TuiMonthExample1, TuiMonthExample2],
    exports: [ExampleTuiCalendarMonthComponent],
})
export class ExampleTuiCalendarMonthModule {}
