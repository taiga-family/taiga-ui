import {ClipboardModule} from '@angular/cdk/clipboard';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiTable} from '@taiga-ui/addon-table';

import {BreakpointsComponent} from './breakpoints.component';
import {ExampleBreakpointsComponent1} from './examples/1';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDoc,
        TuiTable,
        ClipboardModule,
        RouterModule.forChild(tuiGenerateRoutes(BreakpointsComponent)),
    ],
    declarations: [BreakpointsComponent, ExampleBreakpointsComponent1],
    exports: [BreakpointsComponent],
})
export class BreakpointsModule {}
