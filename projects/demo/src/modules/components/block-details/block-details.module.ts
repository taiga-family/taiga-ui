import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiExamplePipe} from '@demo/utils';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiNotificationModule} from '@taiga-ui/core';
import {TuiTitleModule} from '@taiga-ui/experimental';
import {
    TuiAvatarComponent,
    TuiBadgeDirective,
    TuiCommentDirective,
    TuiFadeDirective,
} from '@taiga-ui/kit';
import {TuiBlockDetailsDirective} from '@taiga-ui/layout';

import {ExampleTuiBlockDetailsComponent} from './block-details.component';
import {TuiBlockDetailsExample1} from './examples/1';
import {TuiBlockDetailsExample2} from './examples/2';

@NgModule({
    imports: [
        CommonModule,
        TuiAvatarComponent,
        TuiAmountPipe,
        TuiExamplePipe,
        TuiBadgeDirective,
        TuiTitleModule,
        TuiCommentDirective,
        TuiBlockDetailsDirective,
        TuiFadeDirective,
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
