import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MaskitoModule} from '@maskito/angular';
import {
    TuiDataListModule,
    TuiDropdownModule,
    TuiPrimitiveTextfieldModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiInputCountModule,
    TuiSelectModule,
    TuiValueAccessorModule,
} from '@taiga-ui/kit';

import {TuiColorEditComponent} from './color-edit.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaskitoModule,
        TuiValueAccessorModule,
        TuiSelectModule,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiDropdownModule,
        TuiInputCountModule,
        TuiDataListModule,
    ],
    declarations: [TuiColorEditComponent],
    exports: [TuiColorEditComponent],
})
export class TuiColorEditModule {}
