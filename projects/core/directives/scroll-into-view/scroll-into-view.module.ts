import {NgModule} from '@angular/core';
import {TuiScrollIntoViewDirective} from './scroll-into-view.directive';

@NgModule({
    declarations: [TuiScrollIntoViewDirective],
    exports: [TuiScrollIntoViewDirective],
})
export class TuiScrollIntoViewModule {}
