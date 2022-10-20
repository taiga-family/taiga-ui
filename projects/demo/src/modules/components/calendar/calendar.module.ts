import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiCalendarModule, TuiLinkModule} from '@taiga-ui/core';

import {ExampleTuiCalendarComponent} from './calendar.component';
import {TuiCalendarExample1} from './examples/1';
import {TuiCalendarExample2} from './examples/2';
import {TuiCalendarExample3} from './examples/3';
import {TuiCalendarExample4} from './examples/4';
import {TuiCalendarExample5} from './examples/5';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TuiLinkModule,
        TuiCalendarModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiCalendarComponent)),
    ],
    declarations: [
        ExampleTuiCalendarComponent,
        TuiCalendarExample1,
        TuiCalendarExample2,
        TuiCalendarExample3,
        TuiCalendarExample4,
        TuiCalendarExample5,
    ],
    exports: [ExampleTuiCalendarComponent],
})
export class ExampleTuiCalendarModule {}
