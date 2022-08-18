import {NgModule} from '@angular/core';
import {TuiInputModeModule} from '@taiga-ui/cdk';
import {
    TuiHintControllerModule,
    TuiPrimitiveTextfieldModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiValueAccessorModule} from '@taiga-ui/kit';
import {TextMaskModule} from 'angular2-text-mask';

import {TuiInputCVCComponent} from './input-cvc.component';

@NgModule({
    imports: [
        TextMaskModule,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiHintControllerModule,
        TuiValueAccessorModule,
        TuiInputModeModule,
    ],
    declarations: [TuiInputCVCComponent],
    exports: [TuiInputCVCComponent],
})
export class TuiInputCVCModule {}
