import {ClipboardModule} from '@angular/cdk/clipboard';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {
    TuiAddonDocModule,
    TuiDocCopyModule,
    tuiGenerateRoutes,
} from '@taiga-ui/addon-doc';
import {TuiTableModule} from '@taiga-ui/addon-table';

import {BreakpointsComponent} from './breakpoints.component';
import {ExampleBreakpointsComponent1} from './examples/1';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        TuiTableModule,
        TuiDocCopyModule,
        ClipboardModule,
        RouterModule.forChild(tuiGenerateRoutes(BreakpointsComponent)),
    ],
    declarations: [BreakpointsComponent, ExampleBreakpointsComponent1],
    exports: [BreakpointsComponent],
})
export class BreakpointsModule {}
