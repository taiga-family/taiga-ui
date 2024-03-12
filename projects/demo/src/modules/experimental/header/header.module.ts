import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {
    TuiIconComponent,
    TuiNotificationModule,
    TuiTextfieldControllerModule,
    TuiTooltipModule,
} from '@taiga-ui/core';
import {
    TuiButtonModule,
    TuiHeaderDirective,
    TuiTitleModule,
    TuiToggleModule,
} from '@taiga-ui/experimental';
import {
    TuiAvatarComponent,
    TuiBadgeDirective,
    TuiBadgeNotificationComponent,
    TuiDataListWrapperModule,
    TuiSelectModule,
    TuiSensitiveDirective,
} from '@taiga-ui/kit';

import {TuiHeaderExample1} from './examples/1';
import {TuiHeaderExample2} from './examples/2';
import {TuiHeaderExample3} from './examples/3';
import {ExampleTuiCellComponent} from './header.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiBadgeDirective,
        TuiBadgeNotificationComponent,
        TuiToggleModule,
        TuiTooltipModule,
        TuiHeaderDirective,
        TuiTitleModule,
        TuiIconComponent,
        TuiSensitiveDirective,
        TuiSelectModule,
        TuiDataListWrapperModule,
        TuiTextfieldControllerModule,
        TuiButtonModule,
        tuiGetDocModules(ExampleTuiCellComponent),
        TuiNotificationModule,
        TuiAvatarComponent,
    ],
    declarations: [
        ExampleTuiCellComponent,
        TuiHeaderExample1,
        TuiHeaderExample2,
        TuiHeaderExample3,
    ],
    exports: [ExampleTuiCellComponent],
})
export class ExampleTuiHeaderModule {}
