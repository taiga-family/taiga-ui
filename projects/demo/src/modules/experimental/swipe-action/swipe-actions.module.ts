import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiDataListModule,
    TuiHostedDropdownModule,
    TuiNotificationModule,
} from '@taiga-ui/core';
import {
    TuiAmountPipeModule,
    TuiAvatarModule,
    TuiBadgedContentModule,
    TuiBadgeModule,
    TuiButtonModule,
    TuiCardModule,
    TuiCellModule,
    TuiCheckboxModule,
    TuiIconModule,
    TuiSurfaceModule,
    TuiSwipeActionsModule,
    TuiTitleModule,
    TuiToggleModule,
} from '@taiga-ui/experimental';

import {TuiSwipeActionExample1} from './examples/1';
import {TuiSwipeActionExample2} from './examples/2';
import {TuiSwipeActionExample3} from './examples/3';
import {TuiSwipeActionExample4} from './examples/4';
import {TuiSwipeActionExample5} from './examples/5';
import {ExampleTuiSwipeActionsComponent} from './swipe-actions.component';
import {TuiSwipeActionExample6} from './examples/6';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        TuiAvatarModule,
        TuiCellModule,
        TuiCardModule,
        TuiSurfaceModule,
        TuiSwipeActionsModule,
        TuiAmountPipeModule,
        TuiBadgedContentModule,
        TuiIconModule,
        TuiToggleModule,
        TuiBadgeModule,
        TuiNotificationModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiSwipeActionsComponent)),
        TuiButtonModule,
        FormsModule,
        TuiTitleModule,
        TuiCheckboxModule,
        TuiHostedDropdownModule,
        TuiDataListModule,
    ],
    declarations: [
        ExampleTuiSwipeActionsComponent,
        TuiSwipeActionExample1,
        TuiSwipeActionExample2,
        TuiSwipeActionExample3,
        TuiSwipeActionExample4,
        TuiSwipeActionExample5,
        TuiSwipeActionExample6,
    ],
    exports: [ExampleTuiSwipeActionsComponent],
})
export class ExampleTuiSwipeActionsModule {}
