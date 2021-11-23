import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {TuiLinearPickerComponent} from './linear-picker.component';

@NgModule({
    imports: [CommonModule],
    declarations: [TuiLinearPickerComponent],
    exports: [TuiLinearPickerComponent],
})
export class TuiLinearPickerModule {}
