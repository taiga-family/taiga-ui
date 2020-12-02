import {NgModule} from '@angular/core';
import {TuiModeDirective} from './mode.directive';
import {TuiTableDirective} from './table.directive';

@NgModule({
    declarations: [TuiModeDirective, TuiTableDirective],
    exports: [TuiModeDirective, TuiTableDirective],
})
export class TuiModeModule {}
