import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiScrollIntoViewModule, TuiSvgComponent} from '@taiga-ui/core';

import {TuiSelectOptionComponent} from './select-option.component';

@NgModule({
    imports: [CommonModule, TuiSvgComponent, TuiScrollIntoViewModule],
    declarations: [TuiSelectOptionComponent],
    exports: [TuiSelectOptionComponent],
})
export class TuiSelectOptionModule {}
