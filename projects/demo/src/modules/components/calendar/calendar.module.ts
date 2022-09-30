import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiCalendarModule, TuiLinkModule, TuiNotificationModule} from '@taiga-ui/core';

import {ExampleTuiCalendarComponent} from './calendar.component';
import {TuiCalendarExample1} from './examples/1';
import {TuiCalendarExample2} from './examples/2';
import {TuiCalendarExample3} from './examples/3';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TuiLinkModule,
        TuiCalendarModule,
        TuiAddonDocModule,
        TuiNotificationModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiCalendarComponent)),
    ],
    declarations: [
        ExampleTuiCalendarComponent,
        TuiCalendarExample1,
        TuiCalendarExample2,
        TuiCalendarExample3,
    ],
    exports: [ExampleTuiCalendarComponent],
})
export class ExampleTuiCalendarModule {}
