import {NgModule} from '@angular/core';

import {TuiElementDirective} from './element.directive';

@NgModule({
    declarations: [TuiElementDirective],
    exports: [TuiElementDirective],
})
export class TuiElementModule {}
