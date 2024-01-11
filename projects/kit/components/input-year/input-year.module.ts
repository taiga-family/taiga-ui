import {NgModule} from '@angular/core';
import {MaskitoModule} from '@maskito/angular';
import {
    TuiDropdownModule,
    TuiDropdownOpenDirective,
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
        TuiDropdownModule,
        TuiDropdownOpenDirective,
        TuiPrimitiveTextfieldModule,
        TuiScrollbarModule,
        TuiPrimitiveYearPickerModule,
        TuiTextfieldControllerModule,
        TuiToYearPipeModule,
    ],
    declarations: [TuiInputYearComponent, TuiInputYearDirective],
    exports: [TuiInputYearComponent, TuiInputYearDirective, TuiTextfieldComponent],
})
export class TuiInputYearModule {}
