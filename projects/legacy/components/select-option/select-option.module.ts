import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TuiScrollIntoView} from '@taiga-ui/core/components/scrollbar';

import {TuiSelectOptionComponent} from './select-option.component';

/**
 * @deprecated: drop in v5.0
 */
@NgModule({
    imports: [CommonModule, TuiScrollIntoView, TuiIcon],
    declarations: [TuiSelectOptionComponent],
    exports: [TuiSelectOptionComponent],
})
export class TuiSelectOptionModule {}
