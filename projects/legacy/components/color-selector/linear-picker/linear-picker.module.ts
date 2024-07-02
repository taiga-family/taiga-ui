import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {TuiLinearPickerComponent} from './linear-picker.component';

/**
 * @deprecated: drop in v5.0
 */
@NgModule({
    imports: [CommonModule],
    declarations: [TuiLinearPickerComponent],
    exports: [TuiLinearPickerComponent],
})
export class TuiLinearPickerModule {}
