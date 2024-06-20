import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiCheckbox} from '@taiga-ui/kit/components/checkbox';

import {TuiMultiSelectOptionComponent} from './multi-select-option.component';

@NgModule({
    imports: [CommonModule, TuiCheckbox],
    declarations: [TuiMultiSelectOptionComponent],
    exports: [TuiMultiSelectOptionComponent],
})
export class TuiMultiSelectOptionModule {}
