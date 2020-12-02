import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
    TuiDataListModule,
    TuiHostedDropdownModule,
    TuiPrimitiveTextfieldModule,
} from '@taiga-ui/core';
import {TextMaskModule} from 'angular2-text-mask';
import {TuiInputTimeComponent} from './input-time.component';

@NgModule({
    imports: [
        CommonModule,
        TextMaskModule,
        TuiDataListModule,
        TuiHostedDropdownModule,
        TuiPrimitiveTextfieldModule,
    ],
    declarations: [TuiInputTimeComponent],
    exports: [TuiInputTimeComponent],
})
export class TuiInputTimeModule {}
