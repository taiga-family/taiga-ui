import {NgModule} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiValueAccessorModule} from '@taiga-ui/kit';

import {TuiInputExpireComponent} from './input-expire.component';

@NgModule({
    imports: [
        MaskitoDirective,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiValueAccessorModule,
    ],
    declarations: [TuiInputExpireComponent],
    exports: [TuiInputExpireComponent],
})
export class TuiInputExpireModule {}
