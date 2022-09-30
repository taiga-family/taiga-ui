import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
    TuiDataListModule,
    TuiHostedDropdownModule,
    TuiPrimitiveTextfieldModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiSelectOptionModule} from '@taiga-ui/kit/components/select-option';
import {TextMaskModule, TuiValueAccessorModule} from '@taiga-ui/kit/directives';

import {TuiInputTimeComponent} from './input-time.component';

@NgModule({
    imports: [
        CommonModule,
        TextMaskModule,
        TuiSelectOptionModule,
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
