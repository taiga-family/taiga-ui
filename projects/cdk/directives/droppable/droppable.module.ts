import {NgModule} from '@angular/core';

import {TuiDroppableDirective} from './droppable.directive';

@NgModule({
    declarations: [TuiDroppableDirective],
    exports: [TuiDroppableDirective],
})
export class TuiDroppableModule {}
