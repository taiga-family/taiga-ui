import {NgModule} from '@angular/core';
import {TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TextMaskModule, TuiValueAccessorModule} from '@taiga-ui/kit';

import {TuiInputExpireComponent} from './input-expire.component';

@NgModule({
    imports: [
        TextMaskModule,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiValueAccessorModule,
    ],
    declarations: [TuiInputExpireComponent],
    exports: [TuiInputExpireComponent],
})
export class TuiInputExpireModule {}
