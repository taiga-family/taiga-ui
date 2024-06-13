import {NgModule} from '@angular/core';

import {TuiActionBarComponent} from './action-bar.component';
import {TuiActionBarDirective} from './action-bar.directive';

@NgModule({
    imports: [TuiActionBarComponent, TuiActionBarDirective],
    exports: [TuiActionBarComponent, TuiActionBarDirective],
})
export class TuiActionBar {}
