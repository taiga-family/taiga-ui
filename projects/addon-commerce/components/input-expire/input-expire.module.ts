import {NgModule} from '@angular/core';
import {TuiInputModeModule} from '@taiga-ui/cdk';
import {TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiValueAccessorModule} from '@taiga-ui/kit';
import {TextMaskModule} from 'angular2-text-mask';

import {TuiInputExpireComponent} from './input-expire.component';

@NgModule({
    imports: [
        TextMaskModule,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiValueAccessorModule,
        TuiInputModeModule,
    ],
    declarations: [TuiInputExpireComponent],
    exports: [TuiInputExpireComponent],
})
export class TuiInputExpireModule {}
