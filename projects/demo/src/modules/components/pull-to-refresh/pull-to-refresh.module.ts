import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiSetupComponent} from '@demo/utils';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiPullToRefreshModule} from '@taiga-ui/addon-mobile';
import {
    TuiButtonDirective,
    TuiNotificationComponent,
    TuiScrollbarComponent,
} from '@taiga-ui/core';

import {TuiPullToRefreshExample1} from './examples/1';
import {TuiPullToRefreshExample2} from './examples/2';
import {ExampleTuiPullToRefreshComponent} from './pull-to-refresh.component';

@NgModule({
    imports: [
        CommonModule,
        TuiPullToRefreshModule,
        TuiButtonDirective,
        TuiNotificationComponent,
        TuiScrollbarComponent,
        TuiAddonDoc,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiPullToRefreshComponent)),
        TuiSetupComponent,
    ],
    declarations: [
        ExampleTuiPullToRefreshComponent,
        TuiPullToRefreshExample1,
        TuiPullToRefreshExample2,
    ],
    exports: [ExampleTuiPullToRefreshComponent],
})
export class ExampleTuiPullToRefreshModule {}
