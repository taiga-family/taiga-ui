import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
    TuiButtonModule,
    TuiPrimitiveTextfieldModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiValueAccessorModule} from '@taiga-ui/kit/directives';
import {TextMaskModule} from 'angular2-text-mask';
import {TuiInputCountComponent} from './input-count.component';

@NgModule({
    imports: [
        CommonModule,
        TextMaskModule,
        TuiButtonModule,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiValueAccessorModule,
    ],
    declarations: [TuiInputCountComponent],
    exports: [TuiInputCountComponent],
})
export class TuiInputCountModule {}
