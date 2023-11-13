import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiButtonModule, TuiNotificationModule, TuiRootModule} from '@taiga-ui/core';
import {TuiRippleModule} from '@taiga-ui/experimental';
import {TuiIslandModule} from '@taiga-ui/kit';

import {TuiRippleExample1} from './examples/1';
import {ExampleTuiRippleComponent} from './ripple.component';

@NgModule({
    imports: [
        CommonModule,
        TuiIslandModule,
        TuiRippleModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiRippleComponent)),
        TuiNotificationModule,
        TuiRootModule,
        TuiButtonModule,
    ],
    declarations: [ExampleTuiRippleComponent, TuiRippleExample1],
    exports: [ExampleTuiRippleComponent],
})
export class ExampleTuiRippleModule {}
