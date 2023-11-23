import {NgModule} from '@angular/core';

import {TuiButtonVerticalComponent} from './button-vertical.component';
import {TuiButtonVerticalDirective} from './button-vertical.directive';

@NgModule({
    declarations: [TuiButtonVerticalDirective, TuiButtonVerticalComponent],
    exports: [TuiButtonVerticalDirective],
})
export class TuiButtonVerticalModule {}
