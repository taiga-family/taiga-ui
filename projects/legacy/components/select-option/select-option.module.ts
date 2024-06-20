import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TuiScrollIntoViewDirective} from '@taiga-ui/core/components/scrollbar';

import {TuiSelectOptionComponent} from './select-option.component';

@NgModule({
    imports: [CommonModule, TuiScrollIntoViewDirective, TuiIcon],
    declarations: [TuiSelectOptionComponent],
    exports: [TuiSelectOptionComponent],
})
export class TuiSelectOptionModule {}
