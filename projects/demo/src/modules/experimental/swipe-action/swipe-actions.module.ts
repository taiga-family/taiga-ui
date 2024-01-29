import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiNotificationModule} from '@taiga-ui/core';
import {
    TuiAmountPipeModule,
    TuiAvatarModule,
    TuiBadgedContentModule,
    TuiBadgeModule,
    TuiButtonModule,
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
import {ExampleTuiSwipeActionsComponent} from './swipe-actions.component';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        TuiAvatarModule,
        TuiCellModule,
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
    ],
    declarations: [
        ExampleTuiSwipeActionsComponent,
        TuiSwipeActionExample1,
        TuiSwipeActionExample2,
        TuiSwipeActionExample3,
        TuiSwipeActionExample4,
    ],
    exports: [ExampleTuiSwipeActionsComponent],
})
export class ExampleTuiSwipeActionsModule {}
