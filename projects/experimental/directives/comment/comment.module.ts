import {NgModule} from '@angular/core';

import {TuiCommentComponent} from './comment.component';
import {TuiCommentDirective} from './comment.directive';

@NgModule({
    declarations: [TuiCommentDirective, TuiCommentComponent],
    exports: [TuiCommentDirective],
})
export class TuiCommentModule {}
