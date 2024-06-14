import {NgModule} from '@angular/core';
import {TuiExpand} from '@taiga-ui/core';

import {TuiActionBarComponent} from './action-bar.component';
import {TuiActionBarDirective} from './action-bar.directive';

@NgModule({
    imports: [TuiExpand],
    declarations: [TuiActionBarComponent, TuiActionBarDirective],
    exports: [TuiActionBarComponent, TuiActionBarDirective],
})
export class TuiActionBar {}
