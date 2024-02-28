import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiNotificationModule} from '@taiga-ui/core';
import {
    TuiAmountPipeModule,
    TuiAvatarModule,
    TuiBadgeModule,
    TuiBlockDetailsModule,
    TuiFadeModule,
    TuiTitleModule,
} from '@taiga-ui/experimental';

import {ExampleTuiBlockDetailsComponent} from './block-details.component';
import {TuiBlockDetailsExample1} from './examples/1';
import {TuiBlockDetailsExample2} from './examples/2';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        TuiAvatarModule,
        TuiAmountPipeModule,
        TuiBadgeModule,
        TuiTitleModule,
        TuiBlockDetailsModule,
        TuiFadeModule,
        TuiNotificationModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiBlockDetailsComponent)),
    ],
    declarations: [
        ExampleTuiBlockDetailsComponent,
        TuiBlockDetailsExample1,
        TuiBlockDetailsExample2,
    ],
    exports: [ExampleTuiBlockDetailsComponent],
})
export class ExampleTuiBlockDetailsModule {}
