import {NgModule} from '@angular/core';
import {MaskitoModule} from '@maskito/angular';
import {TuiPreventDefaultModule} from '@taiga-ui/cdk';
import {
    TuiHostedDropdownModule,
    TuiPrimitiveTextfieldModule,
    TuiPrimitiveYearPickerModule,
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
        TuiPreventDefaultModule,
        TuiTextfieldControllerModule,
        TuiToYearPipeModule,
    ],
    declarations: [TuiInputYearComponent, TuiInputYearDirective],
    exports: [TuiInputYearComponent, TuiInputYearDirective, TuiTextfieldComponent],
})
export class TuiInputYearModule {}
