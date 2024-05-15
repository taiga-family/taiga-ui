import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiSetupComponent} from '@demo/utils';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiSwipeActionsAutoCloseDirective,
    TuiSwipeActionsComponent,
} from '@taiga-ui/addon-mobile';
import {
    TuiButtonDirective,
    TuiDataList,
    TuiDropdownDirective,
    TuiDropdownOpenDirective,
    TuiIconComponent,
    TuiNotificationComponent,
    TuiSurfaceDirective,
    TuiTitleDirective,
} from '@taiga-ui/core';
import {
    TuiAvatarComponent,
    TuiBadgedContentComponent,
    TuiCheckboxComponent,
    TuiSwitchComponent,
} from '@taiga-ui/kit';
import {TuiCardLargeDirective, TuiCellDirective} from '@taiga-ui/layout';

import {TuiSwipeActionExample1} from './examples/1';
import {TuiSwipeActionExample2} from './examples/2';
import {TuiSwipeActionExample3} from './examples/3';
import {TuiSwipeActionExample4} from './examples/4';
import {TuiSwipeActionExample5} from './examples/5';
import {ExampleTuiSwipeActionsComponent} from './swipe-actions.component';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDoc,
        TuiAvatarComponent,
        TuiCellDirective,
        TuiCardLargeDirective,
        TuiSurfaceDirective,
        TuiSwipeActionsComponent,
        TuiSwipeActionsAutoCloseDirective,
        TuiAmountPipe,
        TuiBadgedContentComponent,
        TuiIconComponent,
        TuiSwitchComponent,
        TuiNotificationComponent,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiSwipeActionsComponent)),
        TuiButtonDirective,
        FormsModule,
        TuiTitleDirective,
        TuiCheckboxComponent,
        TuiDropdownOpenDirective,
        TuiDataList,
        TuiDropdownDirective,
        TuiSetupComponent,
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
