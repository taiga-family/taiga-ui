import {NgModule} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiValueAccessorModule} from '@taiga-ui/kit';

import {TuiInputCVCComponent} from './input-cvc.component';

@NgModule({
    imports: [
        MaskitoDirective,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiValueAccessorModule,
    ],
    declarations: [TuiInputCVCComponent],
    exports: [TuiInputCVCComponent],
})
export class TuiInputCVCModule {}
