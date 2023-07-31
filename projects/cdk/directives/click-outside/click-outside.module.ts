import {NgModule} from '@angular/core';

import {TuiClickOutsideDirective} from './click-outside.directive';

@NgModule({
    declarations: [TuiClickOutsideDirective],
    exports: [TuiClickOutsideDirective],
})
export class TuiClickOutsideModule {}
