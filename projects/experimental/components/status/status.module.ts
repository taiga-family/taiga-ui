import {NgModule} from '@angular/core';

import {TuiStatusComponent} from './status.component';
import {TuiStatusDirective} from './status.directive';

@NgModule({
    declarations: [TuiStatusComponent, TuiStatusDirective],
    exports: [TuiStatusDirective],
})
export class TuiStatusModule {}
