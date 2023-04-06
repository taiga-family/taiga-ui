import {NgModule} from '@angular/core';

import {TuiControlDirective} from './control.directive';

@NgModule({
    declarations: [TuiControlDirective],
    exports: [TuiControlDirective],
})
export class TuiControlModule {}
