import {NgModule} from '@angular/core';
import {
    TuiHintControllerModule,
    TuiPrimitiveTextfieldModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TextMaskModule} from 'angular2-text-mask';
import {TuiInputCVCComponent} from './input-CVC.component';

@NgModule({
    imports: [
        TextMaskModule,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiHintControllerModule,
    ],
    declarations: [TuiInputCVCComponent],
    exports: [TuiInputCVCComponent],
})
export class TuiInputCVCModule {}
