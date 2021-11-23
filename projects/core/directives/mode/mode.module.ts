import {NgModule} from '@angular/core';

import {TuiModeDirective} from './mode.directive';

@NgModule({
    declarations: [TuiModeDirective],
    exports: [TuiModeDirective],
})
export class TuiModeModule {}
