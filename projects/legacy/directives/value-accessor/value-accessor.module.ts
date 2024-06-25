import {NgModule} from '@angular/core';

import {TuiValueAccessorDirective} from './value-accessor.directive';

/**
 * @deprecated: drop in v5.0
 */
@NgModule({
    declarations: [TuiValueAccessorDirective],
    exports: [TuiValueAccessorDirective],
})
export class TuiValueAccessorModule {}
