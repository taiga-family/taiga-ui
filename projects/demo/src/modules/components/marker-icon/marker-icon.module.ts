import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLinkModule, TuiNotificationModule, TuiSvgModule} from '@taiga-ui/core';
import {TuiMarkerIconModule} from '@taiga-ui/kit';

import {TuiMarkerIconExample1} from './examples/1';
import {TuiMarkerIconExample2} from './examples/2';
import {TuiMarkerIconExample3} from './examples/3';
import {ExampleTuiMarkerIconComponent} from './marker-icon.component';

@NgModule({
    imports: [
        CommonModule,
        TuiLinkModule,
        TuiMarkerIconModule,
        TuiSvgModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiMarkerIconComponent)),
        TuiNotificationModule,
    ],
    declarations: [
        ExampleTuiMarkerIconComponent,
        TuiMarkerIconExample1,
        TuiMarkerIconExample2,
        TuiMarkerIconExample3,
    ],
    exports: [ExampleTuiMarkerIconComponent],
})
export class ExampleTuiMarkerIconModule {}
