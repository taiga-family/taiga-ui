import {NgModule} from '@angular/core';

import {TuiChipComponent} from './chip.component';
import {TuiChipDirective} from './chip.directive';

@NgModule({
    declarations: [TuiChipComponent, TuiChipDirective],
    exports: [TuiChipDirective],
})
export class TuiChipModule {}
