import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiMobileDialogModule} from '@taiga-ui/addon-mobile';
import {TuiButtonDirective} from '@taiga-ui/core';

import {TuiMobileDialogExample1} from './examples/1';
import {ExampleTuiMobileDialogComponent} from './mobile-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        TuiMobileDialogModule,
        TuiButtonDirective,
        TuiAddonDoc,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiMobileDialogComponent)),
    ],
    declarations: [ExampleTuiMobileDialogComponent, TuiMobileDialogExample1],
    exports: [ExampleTuiMobileDialogComponent],
})
export class ExampleTuiMobileDialogModule {}
