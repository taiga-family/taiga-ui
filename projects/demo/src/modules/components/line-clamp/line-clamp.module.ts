import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiSetupComponent} from '@demo/utils';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiActiveZoneDirective} from '@taiga-ui/cdk';
import {
    TuiButtonDirective,
    TuiDataList,
    TuiDropdownModule,
    TuiHint,
    TuiLinkDirective,
    TuiNotificationComponent,
} from '@taiga-ui/core';
import {
    TuiChevronDirective,
    TuiDataListDropdownManagerModule,
    TuiIslandModule,
    TuiLineClampModule,
} from '@taiga-ui/kit';

import {TuiLineClampExample1} from './examples/1';
import {TuiLineClampExample2} from './examples/2';
import {TuiLineClampExample3} from './examples/3';
import {TuiLineClampExample4} from './examples/4';
import {TuiLineClampExample5} from './examples/5';
import {ExampleTuiLineClampComponent} from './line-clamp.component';

@NgModule({
    imports: [
        CommonModule,
        TuiNotificationComponent,
        TuiLineClampModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiLineClampComponent)),
        TuiButtonDirective,
        TuiIslandModule,
        TuiDropdownModule,
        TuiLinkDirective,
        TuiDataListDropdownManagerModule,
        TuiActiveZoneDirective,
        TuiDataList,
        TuiHint,
        TuiChevronDirective,
        TuiSetupComponent,
    ],
    declarations: [
        ExampleTuiLineClampComponent,
        TuiLineClampExample1,
        TuiLineClampExample2,
        TuiLineClampExample3,
        TuiLineClampExample4,
        TuiLineClampExample5,
    ],
    exports: [ExampleTuiLineClampComponent],
})
export class ExampleTuiLineClampModule {}
