import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiMoneyModule} from '@taiga-ui/addon-commerce';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiSheetDialogModule} from '@taiga-ui/addon-mobile';
import {TuiButtonModule, TuiLabelModule, TuiNotificationModule} from '@taiga-ui/core';
import {TuiAvatarModule} from '@taiga-ui/kit';

import {TuiSheetDialogExample1} from './examples/1';
import {TuiSheetDialogExample2} from './examples/2';
import {TuiSheetDialogExample3} from './examples/3';
import {ExampleTuiSheetDialogComponent} from './sheet-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        TuiButtonModule,
        TuiLabelModule,
        TuiMoneyModule,
        TuiAvatarModule,
        TuiNotificationModule,
        TuiSheetDialogModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiSheetDialogComponent)),
    ],
    declarations: [
        ExampleTuiSheetDialogComponent,
        TuiSheetDialogExample1,
        TuiSheetDialogExample2,
        TuiSheetDialogExample3,
    ],
    exports: [ExampleTuiSheetDialogComponent],
})
export class ExampleTuiSheetDialogModule {}
