import {NgModule} from '@angular/core';
import {TuiDropdownBoxModule} from '@taiga-ui/core';

import {TuiDropdownSelectionDirective} from './dropdown-selection.directive';

@NgModule({
    imports: [TuiDropdownBoxModule],
    declarations: [TuiDropdownSelectionDirective],
    exports: [TuiDropdownSelectionDirective],
})
export class TuiDropdownSelectionModule {}
