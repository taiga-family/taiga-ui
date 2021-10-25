import {NgModule} from '@angular/core';
import {TuiSwipeDirective} from './swipe.directive';

/**
 * @experimental
 */
@NgModule({
    declarations: [TuiSwipeDirective],
    exports: [TuiSwipeDirective],
})
export class TuiSwipeModule {}
