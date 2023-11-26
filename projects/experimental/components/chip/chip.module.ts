import {NgModule} from '@angular/core';
import {TuiIconsDirective, TuiIconsModule} from '@taiga-ui/experimental/directives/icons';

import {TuiChipComponent} from './chip.component';
import {TuiChipDirective} from './chip.directive';

@NgModule({
    imports: [TuiIconsModule],
    declarations: [TuiChipComponent, TuiChipDirective],
    exports: [TuiChipDirective, TuiIconsDirective],
})
export class TuiChipModule {}
