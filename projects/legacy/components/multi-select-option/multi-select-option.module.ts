import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiCheckboxComponent} from '@taiga-ui/kit';

import {TuiMultiSelectOptionComponent} from './multi-select-option.component';

@NgModule({
    imports: [CommonModule, TuiCheckboxComponent],
    declarations: [TuiMultiSelectOptionComponent],
    exports: [TuiMultiSelectOptionComponent],
})
export class TuiMultiSelectOptionModule {}
