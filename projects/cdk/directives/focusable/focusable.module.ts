import {NgModule} from '@angular/core';

import {TuiFocusableDirective} from './focusable.directive';

@NgModule({
    declarations: [TuiFocusableDirective],
    exports: [TuiFocusableDirective],
})
export class TuiFocusableModule {}
