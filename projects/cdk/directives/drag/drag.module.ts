import {NgModule} from '@angular/core';

import {TuiDragDirective} from './drag.directive';

/**
 * @deprecated not used anywhere
 */
@NgModule({
    declarations: [TuiDragDirective],
    exports: [TuiDragDirective],
})
export class TuiDragModule {}
