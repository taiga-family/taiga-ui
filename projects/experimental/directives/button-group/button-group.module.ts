import {NgModule} from '@angular/core';

import {TuiButtonGroupComponent} from './button-group.component';
import {TuiButtonGroupDirective} from './button-group.directive';

@NgModule({
    declarations: [TuiButtonGroupDirective, TuiButtonGroupComponent],
    exports: [TuiButtonGroupDirective],
})
export class TuiButtonGroupModule {}
