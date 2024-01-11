import {NgModule} from '@angular/core';
import {MaskitoModule} from '@maskito/angular';
import {
    TuiHostedDropdownModule,
    TuiPrimitiveTextfieldModule,
    TuiPrimitiveYearPickerModule,
    TuiScrollbarModule,
    TuiTextfieldComponent,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiToYearPipeModule} from '@taiga-ui/kit/pipes';

import {TuiInputYearComponent} from './input-year.component';
import {TuiInputYearDirective} from './input-year.directive';

@NgModule({
    imports: [
        MaskitoModule,
        TuiHostedDropdownModule,
        TuiPrimitiveTextfieldModule,
        TuiPrimitiveYearPickerModule,
        TuiScrollbarModule,
        TuiTextfieldControllerModule,
        TuiToYearPipeModule,
    ],
    declarations: [TuiInputYearComponent, TuiInputYearDirective],
    exports: [TuiInputYearComponent, TuiInputYearDirective, TuiTextfieldComponent],
})
export class TuiInputYearModule {}
