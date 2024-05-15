import {NgModule} from '@angular/core';

import {TuiMaskAccessorDirective} from './mask-accessor.directive';

/**
 * @deprecated
 * TODO: Remove before v4.0
 */
@NgModule({
    declarations: [TuiMaskAccessorDirective],
    exports: [TuiMaskAccessorDirective],
})
export class TuiMaskAccessorModule {}
