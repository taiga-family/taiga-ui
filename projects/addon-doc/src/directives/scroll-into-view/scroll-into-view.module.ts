import {NgModule} from '@angular/core';

import {ScrollIntoViewDirective} from './scroll-into-view.directive';

@NgModule({
    declarations: [ScrollIntoViewDirective],
    exports: [ScrollIntoViewDirective],
})
export class ScrollIntoViewModule {}
