import {NgModule} from '@angular/core';

import {TuiRippleDirective} from './ripple.directive';

@NgModule({
    imports: [TuiRippleDirective],
    exports: [TuiRippleDirective],
})
export class TuiRippleModule {}
