import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
    TuiDataListModule,
    TuiHostedDropdownModule,
    TuiPrimitiveTextfieldModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiValueAccessorModule} from '@taiga-ui/kit/directives';
import {TextMaskModule} from 'angular2-text-mask';

import {TuiInputTimeComponent} from './input-time.component';

@NgModule({
    imports: [
        CommonModule,
        TextMaskModule,
        TuiDataListModule,
        TuiHostedDropdownModule,
        TuiPrimitiveTextfieldModule,
        TuiValueAccessorModule,
        TuiTextfieldControllerModule,
    ],
    declarations: [TuiInputTimeComponent],
    exports: [TuiInputTimeComponent],
})
export class TuiInputTimeModule {}
