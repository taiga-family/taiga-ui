import {NgModule} from '@angular/core';

import {TuiHintControllerDirective} from './hint-controller.directive';

@NgModule({
    declarations: [TuiHintControllerDirective],
    exports: [TuiHintControllerDirective],
})
export class TuiHintControllerModule {}
