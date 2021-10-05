import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiFlatPickerModule} from '@taiga-ui/addon-editor/components/flat-picker';
import {TuiLinearPickerModule} from '@taiga-ui/addon-editor/components/linear-picker';

import {TuiColorPickerComponent} from './color-picker.component';

@NgModule({
    imports: [CommonModule, TuiFlatPickerModule, TuiLinearPickerModule],
    declarations: [TuiColorPickerComponent],
    exports: [TuiColorPickerComponent],
})
export class TuiColorPickerModule {}
