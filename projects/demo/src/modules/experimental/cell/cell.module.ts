import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {
    TuiGroupDirective,
    TuiHostedDropdownModule,
    TuiLabelModule,
    TuiLinkModule,
    TuiLoaderModule,
    TuiNotificationModule,
    TuiTextfieldControllerModule,
    TuiTooltipModule,
} from '@taiga-ui/core';
import {
    TuiAvatarModule,
    TuiAvatarStackModule,
    TuiBadgeNotificationModule,
    TuiButtonModule,
    TuiCardModule,
    TuiCellModule,
    TuiCheckboxModule,
    TuiFadeModule,
    TuiIconModule,
    TuiSensitiveModule,
    TuiSurfaceModule,
    TuiThumbnailCardModule,
    TuiTitleModule,
    TuiToggleModule,
} from '@taiga-ui/experimental';
import {
    TuiBadgedContentComponent,
    TuiBadgeDirective,
    TuiDataListWrapperModule,
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
import {TuiCellExample7} from './examples/7';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiAvatarModule,
        TuiAvatarStackModule,
        TuiBadgeDirective,
        TuiBadgeNotificationModule,
        TuiBadgedContentComponent,
        TuiCellModule,
        TuiFadeModule,
        TuiLinkModule,
        TuiNotificationModule,
        TuiProgressModule,
        TuiThumbnailCardModule,
        TuiToggleModule,
        TuiTooltipModule,
        TuiTitleModule,
        TuiIconModule,
        TuiCheckboxModule,
        TuiLoaderModule,
        TuiSensitiveModule,
        TuiSurfaceModule,
        TuiSelectModule,
        TuiDataListWrapperModule,
        TuiTextfieldControllerModule,
        TuiLabelModule,
        TuiButtonModule,
        TuiHostedDropdownModule,
        TuiGroupDirective,
        TuiCardModule,
        tuiGetDocModules(ExampleTuiCellComponent),
    ],
    declarations: [
        ExampleTuiCellComponent,
        TuiCellExample1,
        TuiCellExample2,
        TuiCellExample3,
        TuiCellExample4,
        TuiCellExample5,
        TuiCellExample6,
        TuiCellExample7,
    ],
    exports: [ExampleTuiCellComponent],
})
export class ExampleTuiCellModule {}
