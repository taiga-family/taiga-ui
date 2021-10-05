import {NgModule} from '@angular/core';
import {TuiDropdownBoxModule} from '@taiga-ui/core/components/dropdown-box';

import {TuiDropdownDirective} from './dropdown.directive';

@NgModule({
    imports: [TuiDropdownBoxModule],
    declarations: [TuiDropdownDirective],
    exports: [TuiDropdownDirective],
})
export class TuiDropdownModule {}
