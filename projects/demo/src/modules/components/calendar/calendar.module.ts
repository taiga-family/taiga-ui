import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiCalendarModule, TuiLinkDirective} from '@taiga-ui/core';

import {ExampleTuiCalendarComponent} from './calendar.component';
import {TuiCalendarExample1} from './examples/1';
import {TuiCalendarExample2} from './examples/2';
import {TuiCalendarExample3} from './examples/3';
import {TuiCalendarExample4} from './examples/4';
import {TuiCalendarExample5} from './examples/5';
import {TuiCalendarExample6} from './examples/6';
import {TuiCalendarExample7} from './examples/7';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TuiLinkDirective,
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
        TuiCalendarExample6,
        TuiCalendarExample7,
    ],
    exports: [ExampleTuiCalendarComponent],
})
export class ExampleTuiCalendarModule {}
