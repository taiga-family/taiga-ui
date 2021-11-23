import {NgModule} from '@angular/core';

import {TuiFocusTrapDirective} from './focus-trap.directive';

@NgModule({
    declarations: [TuiFocusTrapDirective],
    exports: [TuiFocusTrapDirective],
})
export class TuiFocusTrapModule {}
