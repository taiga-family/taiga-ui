import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {TuiLinearPickerComponent} from './linear-picker.component';

/**
 * TODO(v5): delete it
 * @deprecated use new version of {@link https://taiga-ui.dev/components/input-color TuiInputColor} (from @taiga-ui/kit) instead
 */
@NgModule({
    imports: [CommonModule],
    declarations: [TuiLinearPickerComponent],
    exports: [TuiLinearPickerComponent],
})
export class TuiLinearPickerModule {}
