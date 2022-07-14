import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiSidebarModule} from '@taiga-ui/addon-mobile';
import {TuiActiveZoneModule, TuiSwipeModule} from '@taiga-ui/cdk';

import {TuiSwipeExample1} from './examples/1';
import {TuiSwipeExample2} from './examples/2';
import {ExampleTuiSwipeComponent} from './swipe.component';

@NgModule({
    imports: [
        CommonModule,
        TuiSwipeModule,
        TuiAddonDocModule,
        TuiSidebarModule,
        TuiActiveZoneModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiSwipeComponent)),
    ],
    declarations: [ExampleTuiSwipeComponent, TuiSwipeExample1, TuiSwipeExample2],
    exports: [ExampleTuiSwipeComponent],
})
export class ExampleTuiSwipeModule {}
