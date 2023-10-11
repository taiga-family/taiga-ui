import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiMoneyModule, TuiThumbnailCardModule} from '@taiga-ui/addon-commerce';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLinkModule, TuiNotificationModule, TuiTooltipModule} from '@taiga-ui/core';
import {
    TuiAvatarModule,
    TuiBadgeAlertModule,
    TuiBadgeModule,
    TuiCellModule,
    TuiFadeModule,
} from '@taiga-ui/experimental';
import {TuiMarkerIconModule, TuiProgressModule, TuiToggleModule} from '@taiga-ui/kit';

import {ExampleTuiCellComponent} from './cell.component';
import {TuiCellExample1} from './examples/1';
import {TuiCellExample2} from './examples/2';
import {TuiCellExample3} from './examples/3';
import {TuiCellExample4} from './examples/4';
import {TuiCellExample5} from './examples/5';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiAddonDocModule,
        TuiAvatarModule,
        TuiBadgeModule,
        TuiBadgeAlertModule,
        TuiCellModule,
        TuiFadeModule,
        TuiLinkModule,
        TuiMarkerIconModule,
        TuiMoneyModule,
        TuiNotificationModule,
        TuiProgressModule,
        TuiThumbnailCardModule,
        TuiToggleModule,
        TuiTooltipModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiCellComponent)),
    ],
    declarations: [
        ExampleTuiCellComponent,
        TuiCellExample1,
        TuiCellExample2,
        TuiCellExample3,
        TuiCellExample4,
        TuiCellExample5,
    ],
    exports: [ExampleTuiCellComponent],
})
export class ExampleTuiCellModule {}
