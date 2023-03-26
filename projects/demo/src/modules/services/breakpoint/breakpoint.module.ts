import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiButtonModule, TuiNotificationModule} from '@taiga-ui/core';

import {ExampleTuiBreakpointComponent} from './breakpoint.component';
import {TuiBreakpointExample} from './examples/1/component';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        TuiButtonModule,
        TuiNotificationModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiBreakpointComponent)),
    ],
    declarations: [ExampleTuiBreakpointComponent, TuiBreakpointExample],
    exports: [ExampleTuiBreakpointComponent],
})
export class ExampleTuiBreakpointModule {}
