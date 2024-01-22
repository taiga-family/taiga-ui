import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiResizeModule} from '@taiga-ui/cdk';

import {TuiSwipeActionsComponent} from './swipe-actions.component';

@NgModule({
    imports: [CommonModule, TuiResizeModule],
    declarations: [TuiSwipeActionsComponent],
    exports: [TuiSwipeActionsComponent],
})
export class TuiSwipeActionsModule {}
