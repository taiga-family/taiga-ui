import {NgModule} from '@angular/core';

import {
    ScrollIntoViewDirective,
    TuiScrollIntoViewLinkDirective,
} from './scroll-into-view.directive';

/**
 * @deprecated: use {@link TuiScrollIntoViewLinkModule}
 * TODO: remove in v3.0
 */
@NgModule({
    declarations: [ScrollIntoViewDirective],
    exports: [ScrollIntoViewDirective],
})
// eslint-disable-next-line @typescript-eslint/naming-convention
export class ScrollIntoViewModule {}

@NgModule({
    declarations: [TuiScrollIntoViewLinkDirective],
    exports: [TuiScrollIntoViewLinkDirective],
})
export class TuiScrollIntoViewLinkModule {}
