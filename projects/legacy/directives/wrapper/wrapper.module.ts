import {NgModule} from '@angular/core';

import {TuiWrapperDirective} from './wrapper.directive';

/**
 * @deprecated: drop in v5.0
 */
@NgModule({
    declarations: [TuiWrapperDirective],
    exports: [TuiWrapperDirective],
})
export class TuiWrapperModule {}
