import {NgModule} from '@angular/core';

import {TuiBlockDetailsComponent} from './block-details.component';
import {TuiBlockDetailsDirective} from './block-details.directive';

@NgModule({
    declarations: [TuiBlockDetailsDirective, TuiBlockDetailsComponent],
    exports: [TuiBlockDetailsDirective],
})
export class TuiBlockDetailsModule {}
