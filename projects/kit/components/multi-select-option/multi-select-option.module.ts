import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiPrimitiveCheckboxModule} from '@taiga-ui/core';

import {TuiMultiSelectOptionComponent} from './multi-select-option.component';

@NgModule({
    imports: [CommonModule, TuiPrimitiveCheckboxModule],
    declarations: [TuiMultiSelectOptionComponent],
    exports: [TuiMultiSelectOptionComponent],
})
export class TuiMultiSelectOptionModule {}
