import {NgModule} from '@angular/core';

import {TuiWrapperDirective} from './wrapper.directive';

/**
 * @deprecated
 * TODO: Remove before v4.0
 */
@NgModule({
    declarations: [TuiWrapperDirective],
    exports: [TuiWrapperDirective],
})
export class TuiWrapperModule {}
