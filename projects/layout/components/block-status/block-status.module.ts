import {NgModule} from '@angular/core';

import {TuiBlockStatusComponent} from './block-status.component';
import {TuiBlockStatusDirective} from './block-status.directive';

@NgModule({
    declarations: [TuiBlockStatusComponent, TuiBlockStatusDirective],
    exports: [TuiBlockStatusComponent, TuiBlockStatusDirective],
})
export class TuiBlockStatus {}
