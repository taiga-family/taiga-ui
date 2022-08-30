import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLinkModule, TuiNotificationModule} from '@taiga-ui/core';
import {TuiActionModule, TuiMarkerIconModule} from '@taiga-ui/kit';

import {ExampleTuiActionComponent} from './action.component';
import {TuiActionExample1} from './examples/1';
import {TuiActionExample2} from './examples/2';
import {TuiActionExample3} from './examples/3';
import {TuiActionExample4} from './examples/4';
import {TuiActionExample5} from './examples/5';

@NgModule({
    imports: [
        CommonModule,
        TuiActionModule,
        TuiAddonDocModule,
        TuiLinkModule,
        TuiMarkerIconModule,
        TuiNotificationModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiActionComponent)),
    ],
    declarations: [
        ExampleTuiActionComponent,
        TuiActionExample1,
        TuiActionExample2,
        TuiActionExample3,
        TuiActionExample4,
        TuiActionExample5,
    ],
    exports: [ExampleTuiActionComponent],
})
export class ExampleTuiActionModule {}
