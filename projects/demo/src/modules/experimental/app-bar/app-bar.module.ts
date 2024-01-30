import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiPlatformModule, TuiPortalModule} from '@taiga-ui/cdk';
import {TuiNotificationModule} from '@taiga-ui/core';
import {
    TuiAppBarModule,
    TuiButtonModule,
    TuiFadeModule,
    TuiIconsModule,
    TuiTitleModule,
} from '@taiga-ui/experimental';
import {TuiProgressModule} from '@taiga-ui/kit';

import {ExampleTuiAppBarComponent} from './app-bar.component';
import {TuiAppBarExample1} from './examples/1';
import {TuiAppBarExample2} from './examples/2';
import {TuiAppBarExample3} from './examples/3';

@NgModule({
    imports: [
        CommonModule,
        TuiIconsModule,
        TuiPlatformModule,
        TuiButtonModule,
        TuiProgressModule,
        TuiNotificationModule,
        TuiAppBarModule,
        TuiPortalModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiAppBarComponent)),
        TuiTitleModule,
        TuiFadeModule,
    ],
    declarations: [
        ExampleTuiAppBarComponent,
        TuiAppBarExample1,
        TuiAppBarExample2,
        TuiAppBarExample3,
    ],
    exports: [ExampleTuiAppBarComponent],
})
export class ExampleTuiAppBarModule {}
