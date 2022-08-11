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

import {CSSBreakpointsComponent} from './css-breakpoints.component';
import {ExampleCSSBreakpointsComponent1} from './examples/1';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        TuiTableModule,
        TuiDocCopyModule,
        ClipboardModule,
        RouterModule.forChild(tuiGenerateRoutes(CSSBreakpointsComponent)),
    ],
    declarations: [CSSBreakpointsComponent, ExampleCSSBreakpointsComponent1],
    exports: [CSSBreakpointsComponent],
})
export class CSSBreakpointsModule {}
