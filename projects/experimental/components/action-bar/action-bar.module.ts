import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiExpandModule} from '@taiga-ui/core';

import {TuiActionBarComponent} from './action-bar.component';
import {TuiActionBarDirective} from './action-bar.directive';

@NgModule({
    imports: [CommonModule, TuiExpandModule],
    declarations: [TuiActionBarDirective, TuiActionBarComponent],
    exports: [TuiActionBarDirective, TuiActionBarComponent],
})
export class TuiActionBarModule {}
