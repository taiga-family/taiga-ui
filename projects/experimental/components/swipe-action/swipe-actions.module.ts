import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiResizeModule} from '@taiga-ui/cdk';

import {TuiSwipeActionsComponent} from './swipe-actions.component';
import {TuiSwipeActionsAutoCloseDirective} from './swipe-actions-auto-close.directive';

@NgModule({
    imports: [CommonModule, TuiResizeModule],
    declarations: [TuiSwipeActionsComponent, TuiSwipeActionsAutoCloseDirective],
    exports: [TuiSwipeActionsComponent, TuiSwipeActionsAutoCloseDirective],
})
export class TuiSwipeActionsModule {}
