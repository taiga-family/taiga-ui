import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiNotificationModule} from '@taiga-ui/core';
import {TuiCommentModule} from '@taiga-ui/experimental';

import {ExampleTuiCommentComponent} from './comment.component';
import {TuiCommentExample1} from './examples/1';
import {TuiCommentExample2} from './examples/2';

@NgModule({
    imports: [
        CommonModule,
        TuiCommentModule,
        TuiNotificationModule,
        tuiGetDocModules(ExampleTuiCommentComponent),
    ],
    declarations: [ExampleTuiCommentComponent, TuiCommentExample1, TuiCommentExample2],
    exports: [ExampleTuiCommentComponent],
})
export class ExampleTuiCommentModule {}
