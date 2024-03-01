import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiNotificationModule} from '@taiga-ui/core';
import {
    TuiAmountPipeModule,
    TuiAvatarModule,
    TuiBadgeModule,
    TuiBlockDetailsModule,
    TuiCommentModule,
    TuiFadeModule,
    TuiTitleModule,
} from '@taiga-ui/experimental';

import {ExampleTuiBlockDetailsComponent} from './block-details.component';
import {TuiBlockDetailsExample1} from './examples/1';
import {TuiBlockDetailsExample2} from './examples/2';

@NgModule({
    imports: [
        CommonModule,
        TuiAvatarModule,
        TuiAmountPipeModule,
        TuiBadgeModule,
        TuiTitleModule,
        TuiCommentModule,
        TuiBlockDetailsModule,
        TuiFadeModule,
        TuiNotificationModule,
        tuiGetDocModules(ExampleTuiBlockDetailsComponent),
    ],
    declarations: [
        ExampleTuiBlockDetailsComponent,
        TuiBlockDetailsExample1,
        TuiBlockDetailsExample2,
    ],
    exports: [ExampleTuiBlockDetailsComponent],
})
export class ExampleTuiBlockDetailsModule {}
