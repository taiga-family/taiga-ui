import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiAppBarModule} from '@taiga-ui/addon-mobile';
import {TuiPortalModule} from '@taiga-ui/cdk';
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
        TuiPortalModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiAppBarComponent)),
    ],
    declarations: [ExampleTuiAppBarComponent, TuiAppBarExample1],
    exports: [ExampleTuiAppBarComponent],
})
export class ExampleTuiAppBarModule {}
