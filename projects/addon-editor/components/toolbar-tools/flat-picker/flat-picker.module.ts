import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiFlatPickerComponent} from './flat-picker.component';

@NgModule({
    imports: [CommonModule],
    declarations: [TuiFlatPickerComponent],
    exports: [TuiFlatPickerComponent],
})
export class TuiFlatPickerModule {}
