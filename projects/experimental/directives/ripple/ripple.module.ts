import {NgModule} from '@angular/core';

import {TuiRippleDirective} from './ripple.directive';
import {TuiRippleStylesComponent} from './ripple-styles.component';

@NgModule({
    declarations: [TuiRippleDirective, TuiRippleStylesComponent],
    exports: [TuiRippleDirective],
})
export class TuiRippleModule {}
