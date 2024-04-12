import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiThumbnailCardComponent} from '@taiga-ui/addon-commerce';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {
    TuiButtonDirective,
    TuiDropdownModule,
    TuiGroupDirective,
    TuiIconComponent,
    TuiLabelModule,
    TuiLinkDirective,
    TuiLoaderModule,
    TuiNotificationModule,
    TuiSurfaceDirective,
    TuiTextfieldControllerModule,
    TuiTitleDirective,
    TuiTooltipModule,
} from '@taiga-ui/core';
import {TuiCardModule, TuiCellModule} from '@taiga-ui/experimental';
import {
    TuiAvatarComponent,
    TuiAvatarStackComponent,
    TuiBadgedContentComponent,
    TuiBadgeDirective,
    TuiBadgeNotificationComponent,
    TuiCheckboxComponent,
    TuiDataListWrapperModule,
    TuiFadeDirective,
    TuiProgressModule,
    TuiSelectModule,
    TuiSensitiveDirective,
    TuiSwitchComponent,
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
        TuiAvatarComponent,
        TuiAvatarStackComponent,
        TuiBadgeDirective,
        TuiBadgeNotificationComponent,
        TuiBadgedContentComponent,
        TuiCellModule,
        TuiFadeDirective,
        TuiLinkDirective,
        TuiNotificationModule,
        TuiProgressModule,
        TuiThumbnailCardComponent,
        TuiSwitchComponent,
        TuiTooltipModule,
        TuiTitleDirective,
        TuiIconComponent,
        TuiCheckboxComponent,
        TuiLoaderModule,
        TuiSensitiveDirective,
        TuiSurfaceDirective,
        TuiSelectModule,
        TuiDataListWrapperModule,
        TuiTextfieldControllerModule,
        TuiLabelModule,
        TuiButtonDirective,
        TuiDropdownModule,
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
