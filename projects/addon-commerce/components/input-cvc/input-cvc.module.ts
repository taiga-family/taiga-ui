import {NgModule} from '@angular/core';
import {MaskitoModule} from '@maskito/angular';
import {TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiValueAccessorModule} from '@taiga-ui/kit';

import {TuiInputCVCComponent} from './input-cvc.component';

@NgModule({
    imports: [
        MaskitoModule,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiValueAccessorModule,
    ],
    declarations: [TuiInputCVCComponent],
    exports: [TuiInputCVCComponent],
})
export class TuiInputCVCModule {}
