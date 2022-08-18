import {NgModule} from '@angular/core';
import {TuiInputModeModule} from '@taiga-ui/cdk';
import {TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiValueAccessorModule} from '@taiga-ui/kit';
import {TextMaskModule} from 'angular2-text-mask';

import {TuiInputCardComponent} from './input-card.component';

@NgModule({
    imports: [
        TextMaskModule,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiValueAccessorModule,
        TuiInputModeModule,
    ],
    declarations: [TuiInputCardComponent],
    exports: [TuiInputCardComponent],
})
export class TuiInputCardModule {}
