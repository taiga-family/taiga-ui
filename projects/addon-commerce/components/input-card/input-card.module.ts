import {NgModule} from '@angular/core';
import {
    TuiPrimitiveTextfieldModule,
    TuiTextfieldComponent,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TextMaskModule, TuiValueAccessorModule} from '@taiga-ui/kit';

import {TuiInputCardComponent} from './input-card.component';
import {TuiInputCardDirective} from './input-card.directive';

@NgModule({
    imports: [
        TextMaskModule,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiValueAccessorModule,
    ],
    declarations: [TuiInputCardComponent, TuiInputCardDirective],
    exports: [TuiInputCardComponent, TuiInputCardDirective, TuiTextfieldComponent],
})
export class TuiInputCardModule {}
