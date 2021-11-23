import {NgModule} from '@angular/core';

import {TuiPressedDirective} from './pressed.directive';

@NgModule({
    declarations: [TuiPressedDirective],
    exports: [TuiPressedDirective],
})
export class TuiPressedModule {}
