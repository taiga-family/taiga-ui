import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiIconComponent, TuiScrollIntoViewDirective} from '@taiga-ui/core';

import {TuiSelectOptionComponent} from './select-option.component';

@NgModule({
    imports: [CommonModule, TuiScrollIntoViewDirective, TuiIconComponent],
    declarations: [TuiSelectOptionComponent],
    exports: [TuiSelectOptionComponent],
})
export class TuiSelectOptionModule {}
