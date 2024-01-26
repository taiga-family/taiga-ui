import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {IntersectionObserverModule} from '@ng-web-apis/intersection-observer';
import {TuiResizeModule} from '@taiga-ui/cdk';

import {TuiSwipeActionsComponent} from './swipe-actions.component';
import {TuiSwipeActionsOpenDirective} from './swipe-actions-open.directive';

@NgModule({
    imports: [CommonModule, TuiResizeModule, IntersectionObserverModule],
    declarations: [TuiSwipeActionsComponent, TuiSwipeActionsOpenDirective],
    exports: [TuiSwipeActionsComponent, TuiSwipeActionsOpenDirective],
})
export class TuiSwipeActionsModule {}
