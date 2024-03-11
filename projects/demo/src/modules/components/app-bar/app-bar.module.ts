import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiAppBarModule} from '@taiga-ui/addon-mobile';
import {TuiButtonModule, TuiLabelModule, TuiNotificationModule} from '@taiga-ui/core';
import {TuiProgressModule} from '@taiga-ui/kit';

import {ExampleTuiAppBarComponent} from './app-bar.component';
import {TuiAppBarExample1} from './examples/1';

@NgModule({
    imports: [
        CommonModule,
        TuiButtonModule,
        TuiProgressModule,
        TuiLabelModule,
        TuiNotificationModule,
        TuiAppBarModule,
        TuiAddonDocModule,
        TuiAppBarExample1,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiAppBarComponent)),
    ],
    declarations: [ExampleTuiAppBarComponent],
    exports: [ExampleTuiAppBarComponent],
})
export class ExampleTuiAppBarModule {}
