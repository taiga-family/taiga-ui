import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {
    TuiNotificationModule,
    TuiTextfieldControllerModule,
    TuiTooltipModule,
} from '@taiga-ui/core';
import {
    TuiBadgeNotificationModule,
    TuiButtonModule,
    TuiHeaderDirective,
    TuiIconModule,
    TuiSensitiveModule,
    TuiTitleModule,
    TuiToggleModule,
} from '@taiga-ui/experimental';
import {
    TuiAvatarComponent,
    TuiBadgeDirective,
    TuiDataListWrapperModule,
    TuiSelectModule,
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
        TuiBadgeNotificationModule,
        TuiToggleModule,
        TuiTooltipModule,
        TuiHeaderDirective,
        TuiTitleModule,
        TuiIconModule,
        TuiSensitiveModule,
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
