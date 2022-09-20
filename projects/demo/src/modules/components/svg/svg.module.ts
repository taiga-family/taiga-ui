import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLinkModule, TuiNotificationModule, TuiSvgModule} from '@taiga-ui/core';
import {TuiPresentModule} from '@taiga-ui/kit';

import {TuiSvgExample1} from './examples/1';
import {TuiSvgExample2} from './examples/2';
import {ExampleTuiSvgComponent} from './svg.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TuiSvgModule,
        TuiPresentModule,
        TuiLinkModule,
        TuiAddonDocModule,
        TuiNotificationModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiSvgComponent)),
    ],
    declarations: [ExampleTuiSvgComponent, TuiSvgExample1, TuiSvgExample2],
    exports: [ExampleTuiSvgComponent],
})
export class ExampleTuiSvgModule {}
