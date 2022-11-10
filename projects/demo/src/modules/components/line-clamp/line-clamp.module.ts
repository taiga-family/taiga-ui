import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiHostedDropdownModule,
    TuiLinkModule,
    TuiNotificationModule,
    TuiSvgModule,
} from '@taiga-ui/core';
import {
    TuiDataListDropdownManagerModule,
    TuiIslandModule,
    TuiLineClampModule,
} from '@taiga-ui/kit';

import {TuiLineClampExample1} from './examples/1';
import {TuiLineClampExample2} from './examples/2';
import {TuiLineClampExample3} from './examples/3';
import {TuiLineClampExample4} from './examples/4';
import {ExampleTuiLineClampComponent} from './line-clamp.component';

@NgModule({
    imports: [
        CommonModule,
        TuiNotificationModule,
        TuiLineClampModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiLineClampComponent)),
        TuiButtonModule,
        TuiIslandModule,
        TuiHostedDropdownModule,
        TuiLinkModule,
        TuiDataListDropdownManagerModule,
        TuiActiveZoneModule,
        TuiDataListModule,
        TuiSvgModule,
    ],
    declarations: [
        ExampleTuiLineClampComponent,
        TuiLineClampExample1,
        TuiLineClampExample2,
        TuiLineClampExample3,
        TuiLineClampExample4,
    ],
    exports: [ExampleTuiLineClampComponent],
})
export class ExampleTuiLineClampModule {}
