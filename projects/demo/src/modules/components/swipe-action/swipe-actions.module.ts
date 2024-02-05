import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiSwipeActionsAutoCloseDirective,
    TuiSwipeActionsComponent,
} from '@taiga-ui/addon-mobile';
import {
    TuiDataListModule,
    TuiDropdownDirective,
    TuiDropdownOpenDirective,
    TuiNotificationModule,
} from '@taiga-ui/core';
import {
    TuiAmountPipeModule,
    TuiAvatarModule,
    TuiButtonModule,
    TuiCardModule,
    TuiCellModule,
    TuiCheckboxModule,
    TuiIconModule,
    TuiSurfaceModule,
    TuiTitleModule,
    TuiToggleModule,
} from '@taiga-ui/experimental';
import {TuiBadgeComponent, TuiBadgedContentComponent} from '@taiga-ui/kit';

import {TuiSwipeActionExample1} from './examples/1';
import {TuiSwipeActionExample2} from './examples/2';
import {TuiSwipeActionExample3} from './examples/3';
import {TuiSwipeActionExample4} from './examples/4';
import {TuiSwipeActionExample5} from './examples/5';
import {ExampleTuiSwipeActionsComponent} from './swipe-actions.component';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        TuiAvatarModule,
        TuiCellModule,
        TuiCardModule,
        TuiSurfaceModule,
        TuiSwipeActionsComponent,
        TuiSwipeActionsAutoCloseDirective,
        TuiAmountPipeModule,
        TuiBadgedContentComponent,
        TuiIconModule,
        TuiToggleModule,
        TuiBadgeComponent,
        TuiNotificationModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiSwipeActionsComponent)),
        TuiButtonModule,
        FormsModule,
        TuiTitleModule,
        TuiCheckboxModule,
        TuiDropdownOpenDirective,
        TuiDataListModule,
        TuiDropdownDirective,
    ],
    declarations: [
        ExampleTuiSwipeActionsComponent,
        TuiSwipeActionExample1,
        TuiSwipeActionExample2,
        TuiSwipeActionExample3,
        TuiSwipeActionExample4,
        TuiSwipeActionExample5,
    ],
    exports: [ExampleTuiSwipeActionsComponent],
})
export class ExampleTuiSwipeActionsModule {}
