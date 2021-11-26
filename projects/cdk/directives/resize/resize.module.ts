import {NgModule} from '@angular/core';

import {TuiResizeDirective} from './resize.directive';

/**
 * @experimental
 */
@NgModule({
    declarations: [TuiResizeDirective],
    exports: [TuiResizeDirective],
})
export class TuiResizeModule {}
