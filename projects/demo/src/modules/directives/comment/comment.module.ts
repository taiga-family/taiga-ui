import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiExamplePipe} from '@demo/utils';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiNotificationModule} from '@taiga-ui/core';
import {TuiCommentDirective} from '@taiga-ui/kit';

import {ExampleTuiCommentComponent} from './comment.component';
import {TuiCommentExample1} from './examples/1';
import {TuiCommentExample2} from './examples/2';

@NgModule({
    imports: [
        CommonModule,
        TuiCommentDirective,
        TuiNotificationModule,
        TuiExamplePipe,
        tuiGetDocModules(ExampleTuiCommentComponent),
    ],
    declarations: [ExampleTuiCommentComponent, TuiCommentExample1, TuiCommentExample2],
    exports: [ExampleTuiCommentComponent],
})
export class ExampleTuiCommentModule {}
