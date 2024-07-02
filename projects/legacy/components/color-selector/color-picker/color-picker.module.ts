import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {TuiFlatPickerModule} from '../flat-picker/flat-picker.module';
import {TuiLinearPickerModule} from '../linear-picker/linear-picker.module';
import {TuiColorPickerComponent} from './color-picker.component';

/**
 * @deprecated: drop in v5.0
 */
@NgModule({
    imports: [CommonModule, TuiFlatPickerModule, TuiLinearPickerModule],
    declarations: [TuiColorPickerComponent],
    exports: [TuiColorPickerComponent],
})
export class TuiColorPickerModule {}
