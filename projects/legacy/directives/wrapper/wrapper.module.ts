import {NgModule} from '@angular/core';

import {TuiWrapperDirective} from './wrapper.directive';

/**
 * @deprecated
 */
@NgModule({
    declarations: [TuiWrapperDirective],
    exports: [TuiWrapperDirective],
})
export class TuiWrapperModule {}
