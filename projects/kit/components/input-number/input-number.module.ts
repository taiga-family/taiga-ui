import {NgModule} from '@angular/core';
import {TuiMapperPipeModule} from '@taiga-ui/cdk';
import {TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiValueAccessorModule} from '@taiga-ui/kit/directives';
import {TextMaskModule} from 'angular2-text-mask';
import {TuiInputNumberComponent} from './input-number.component';

@NgModule({
    imports: [
        TextMaskModule,
        TuiMapperPipeModule,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiValueAccessorModule,
    ],
    declarations: [TuiInputNumberComponent],
    exports: [TuiInputNumberComponent],
})
export class TuiInputNumberModule {}
