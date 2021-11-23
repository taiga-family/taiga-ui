import {NgModule} from '@angular/core';

import {TuiDesignModeDirective} from './design-mode.directive';

@NgModule({
    declarations: [TuiDesignModeDirective],
    exports: [TuiDesignModeDirective],
})
export class TuiDesignModeModule {}
