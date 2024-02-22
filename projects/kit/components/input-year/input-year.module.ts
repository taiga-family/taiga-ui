import {NgModule} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {
    TuiDropdownModule,
    TuiDropdownOpenDirective,
    TuiPrimitiveTextfieldModule,
    TuiPrimitiveYearPickerModule,
    TuiScrollbarComponent,
    TuiTextfieldComponent,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiToYearPipeModule} from '@taiga-ui/kit/pipes';

import {TuiInputYearComponent} from './input-year.component';
import {TuiInputYearDirective} from './input-year.directive';

@NgModule({
    imports: [
        MaskitoDirective,
        TuiDropdownModule,
        TuiDropdownOpenDirective,
        TuiPrimitiveTextfieldModule,
        TuiScrollbarComponent,
        TuiPrimitiveYearPickerModule,
        TuiTextfieldControllerModule,
        TuiToYearPipeModule,
    ],
    declarations: [TuiInputYearComponent, TuiInputYearDirective],
    exports: [TuiInputYearComponent, TuiInputYearDirective, TuiTextfieldComponent],
})
export class TuiInputYearModule {}
