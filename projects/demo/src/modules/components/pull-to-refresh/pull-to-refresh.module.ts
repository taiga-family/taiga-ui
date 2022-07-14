import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiPullToRefreshModule} from '@taiga-ui/addon-mobile';
import {TuiButtonModule, TuiNotificationModule} from '@taiga-ui/core';

import {TuiPullToRefreshExample1} from './examples/1';
import {TuiPullToRefreshExample2} from './examples/2';
import {ExampleTuiPullToRefreshComponent} from './pull-to-refresh.component';

@NgModule({
    imports: [
        CommonModule,
        TuiPullToRefreshModule,
        TuiButtonModule,
        TuiNotificationModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiPullToRefreshComponent)),
    ],
    declarations: [
        ExampleTuiPullToRefreshComponent,
        TuiPullToRefreshExample1,
        TuiPullToRefreshExample2,
    ],
    exports: [ExampleTuiPullToRefreshComponent],
})
export class ExampleTuiPullToRefreshModule {}
