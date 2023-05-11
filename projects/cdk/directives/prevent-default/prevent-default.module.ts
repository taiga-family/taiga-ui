import {NgModule} from '@angular/core';

import {TuiPreventDefaultDirective} from './prevent-default.directive';

/**
 * @deprecated Use (event.prevent.silent)=(0) instead.
 */
@NgModule({
    declarations: [TuiPreventDefaultDirective],
    exports: [TuiPreventDefaultDirective],
})
export class TuiPreventDefaultModule {}
