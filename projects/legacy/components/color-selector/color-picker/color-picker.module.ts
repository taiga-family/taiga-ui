import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {TuiFlatPickerModule} from '../flat-picker/flat-picker.module';
import {TuiLinearPickerModule} from '../linear-picker/linear-picker.module';
import {TuiColorPickerComponent} from './color-picker.component';

/**
 * TODO(v5): delete it
 * @deprecated use new version of {@link https://taiga-ui.dev/components/input-color TuiInputColor} (from @taiga-ui/kit) instead
 */
@NgModule({
    imports: [CommonModule, TuiFlatPickerModule, TuiLinearPickerModule],
    declarations: [TuiColorPickerComponent],
    exports: [TuiColorPickerComponent],
})
export class TuiColorPickerModule {}
