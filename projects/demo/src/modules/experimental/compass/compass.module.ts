import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiNotificationModule} from '@taiga-ui/core';
import {TuiCompassModule} from '@taiga-ui/experimental';

import {ExampleTuiCompassComponent} from './compass.component';
import {TuiCompassExample1} from './examples/1';
import {TuiCompassExample2} from './examples/2';

@NgModule({
    imports: [
        CommonModule,
        TuiCompassModule,
        TuiAddonDocModule,
        TuiNotificationModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiCompassComponent)),
    ],
    declarations: [ExampleTuiCompassComponent, TuiCompassExample1, TuiCompassExample2],
    exports: [ExampleTuiCompassComponent],
})
export class ExampleTuiCompassModule {}
