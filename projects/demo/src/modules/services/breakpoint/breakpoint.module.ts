import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';

import {ExampleTuiBreakpointComponent} from './breakpoint.component';
import {TuiBreakpointExample1} from './examples/1';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDoc,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiBreakpointComponent)),
    ],
    declarations: [ExampleTuiBreakpointComponent, TuiBreakpointExample1],
    exports: [ExampleTuiBreakpointComponent],
})
export class ExampleTuiBreakpointModule {}
