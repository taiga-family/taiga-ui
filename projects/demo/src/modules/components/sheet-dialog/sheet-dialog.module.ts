import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiSheetDialogModule} from '@taiga-ui/addon-mobile';
import {TuiSwipeModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiLabelModule,
    TuiNotificationModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiAvatarModule, TuiInputModule} from '@taiga-ui/kit';

import {TuiSheetDialogExample1} from './examples/1';
import {TuiSheetDialogExample2} from './examples/2';
import {TuiSheetDialogExample3} from './examples/3';
import {TuiSheetDialogExample4} from './examples/4';
import {ExampleTuiSheetDialogComponent} from './sheet-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TuiInputModule,
        TuiTextfieldControllerModule,
        TuiButtonModule,
        TuiLabelModule,
        TuiAmountPipe,
        TuiAvatarModule,
        TuiNotificationModule,
        TuiSheetDialogModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiSheetDialogComponent)),
        TuiSwipeModule,
    ],
    declarations: [
        ExampleTuiSheetDialogComponent,
        TuiSheetDialogExample1,
        TuiSheetDialogExample2,
        TuiSheetDialogExample3,
        TuiSheetDialogExample4,
    ],
    exports: [ExampleTuiSheetDialogComponent],
})
export class ExampleTuiSheetDialogModule {}
