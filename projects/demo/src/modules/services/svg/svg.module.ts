import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {
    TuiAddonDocModule,
    tuiGenerateRoutes,
    TuiTextCodeModule,
} from '@taiga-ui/addon-doc';
import {TuiSvgModule} from '@taiga-ui/core';

import {ExampleTuiSvgComponent} from './svg.component';

@NgModule({
    imports: [
        CommonModule,
        TuiSvgModule,
        TuiAddonDocModule,
        TuiTextCodeModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiSvgComponent)),
    ],
    declarations: [ExampleTuiSvgComponent],
    exports: [ExampleTuiSvgComponent],
})
export class ExampleTuiSvgModule {}
