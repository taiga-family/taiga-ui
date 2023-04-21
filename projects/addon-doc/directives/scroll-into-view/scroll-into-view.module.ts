import {NgModule} from '@angular/core';

import {TuiScrollIntoViewLinkDirective} from './scroll-into-view.directive';

@NgModule({
    declarations: [TuiScrollIntoViewLinkDirective],
    exports: [TuiScrollIntoViewLinkDirective],
})
export class TuiScrollIntoViewLinkModule {}
