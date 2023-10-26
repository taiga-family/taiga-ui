import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiMoneyModule} from '@taiga-ui/addon-commerce';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiLabelModule,
    TuiLinkModule,
    TuiLoaderModule,
    TuiNotificationModule,
    TuiSvgModule,
    TuiTextfieldControllerModule,
    TuiTooltipModule,
    TuiWrapperModule,
} from '@taiga-ui/core';
import {
    TuiAvatarModule,
    TuiAvatarStackModule,
    TuiBadgedContentModule,
    TuiBadgeModule,
    TuiBadgeNotificationModule,
    TuiCellModule,
    TuiCheckboxModule,
    TuiFadeModule,
    TuiSensitiveModule,
    TuiSurfaceModule,
    TuiThumbnailCardModule,
    TuiTitleModule,
    TuiToggleModule,
} from '@taiga-ui/experimental';
import {
    TuiDataListWrapperModule,
    TuiMarkerIconModule,
    TuiProgressModule,
    TuiSelectModule,
} from '@taiga-ui/kit';

import {ExampleTuiCellComponent} from './cell.component';
import {TuiCellExample1} from './examples/1';
import {TuiCellExample2} from './examples/2';
import {TuiCellExample3} from './examples/3';
import {TuiCellExample4} from './examples/4';
import {TuiCellExample5} from './examples/5';
import {TuiCellExample6} from './examples/6';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiWrapperModule,
        TuiAddonDocModule,
        TuiAvatarModule,
        TuiBadgeModule,
        TuiBadgeNotificationModule,
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
        TuiTitleModule,
        TuiBadgedContentModule,
        TuiToggleModule,
        TuiSvgModule,
        TuiCheckboxModule,
        TuiAvatarStackModule,
        TuiLoaderModule,
        TuiSensitiveModule,
        TuiSurfaceModule,
        TuiSelectModule,
        TuiDataListWrapperModule,
        TuiTextfieldControllerModule,
        TuiLabelModule,
    ],
    declarations: [
        ExampleTuiCellComponent,
        TuiCellExample1,
        TuiCellExample2,
        TuiCellExample3,
        TuiCellExample4,
        TuiCellExample5,
        TuiCellExample6,
    ],
    exports: [ExampleTuiCellComponent],
})
export class ExampleTuiCellModule {}
