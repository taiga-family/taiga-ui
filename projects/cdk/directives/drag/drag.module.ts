import {NgModule} from '@angular/core';

import {TuiDragDirective} from './drag.directive';

@NgModule({
    declarations: [TuiDragDirective],
    exports: [TuiDragDirective],
})
export class TuiDragModule {}
